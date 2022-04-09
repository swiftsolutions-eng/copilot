import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'
import yamljs from 'yamljs'
import prettier from 'prettier'
import { dialog } from 'electron'

let SOURCE_FOLDER = ''

const AVAILABLE_ROLES = new Set()

export const isReady = () => !!SOURCE_FOLDER

export const browseFile = async () => {
  const { filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
  })

  if (filePaths.length) {
    return filePaths[0]
  }
}

export const browseDirectory = async () => {
  const { filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  })

  if (filePaths.length) {
    return filePaths[0]
  }
}

export const chooseSource = async () => {
  try {
    const location = await dialog.showOpenDialog({
      properties: ['openDirectory'],
    })

    if (location) {
      SOURCE_FOLDER = location.filePaths[0]
    }

    return true
  } catch (error) {
    return false
  }
}

export const getFiles = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(SOURCE_FOLDER, { encoding: 'utf-8' }, (err, files) => {
      if (err) {
        return reject(err)
      }

      return resolve(files?.filter(n => n !== 'tables.yaml'))
    })
  })
}

export const getTableMap = async () => {
  const files = await getFiles()
  const result: Record<string, any> = files.reduce((acc, fname) => {
    const parsedJson = yamljs.load(path.join(SOURCE_FOLDER, fname))

    parsedJson?.select_permissions?.forEach((p: any) => {
      AVAILABLE_ROLES.add(p.role)
    })

    return {
      ...acc,
      [fname]: parsedJson,
    }
  }, {})

  return result
}

export const getRolesMap = async (tableMap: Record<string, any>) => {
  const result = Array.from(AVAILABLE_ROLES).map(role => {
    const tables: any[] = []
    Object.keys(tableMap).forEach(tkey => {
      const tsource = tableMap[tkey]
      const permission = tsource.select_permissions?.find(
        (p: any) => p.role === role
      )

      if (permission) {
        tables.push({
          name: tsource.table.name,
          schema: tsource.table.schema,
          permission: permission.permission,
        })
      }
    })

    return {
      roleName: role,
      tables,
    }
  })

  return result
}

export const getRawData = async () => {
  const tableMap = await getTableMap()
  const rolesMap = await getRolesMap(tableMap)
  return {
    tableMap,
    rolesMap,
    AVAILABLE_ROLES,
  }
}

export const addTableToPermission = async (payload: {
  roleName: string
  tableName: string
  allowAggregation?: boolean
  context?: 'warehouse' | 'company'
}) => {
  const tableMap = await getTableMap()
  const target = Object.values(tableMap).find(
    n => `${n?.table?.schema}_${n?.table?.name}` === payload.tableName
  )

  if (!target) return { success: false, message: 'Table not found' }

  const _target = Object.assign({}, target)
  if (!_target.select_permissions) {
    _target.select_permissions = []
  }

  const rolePermission = _target.select_permissions.find(
    (n: any) => n.role === payload.roleName
  )

  if (rolePermission) {
    rolePermission.permission.allow_aggregations = !!payload.allowAggregation
    rolePermission.permission.columns = '*'
    if (!payload.context && rolePermission.permission.filter) {
      rolePermission.permission.filter = undefined
    }

    if (payload.context) {
      switch (payload.context) {
        case 'company': {
          rolePermission.permission = {
            ...rolePermission.permission,
            filter: {
              company_id: { _eq: 'x-hasura-company-id' },
            },
          }
          break
        }
        case 'warehouse': {
          rolePermission.permission = {
            ...rolePermission.permission,
            filter: {
              warehouse_id: { _eq: 'x-hasura-warehouse-id' },
            },
          }
        }
      }
    }
  } else {
    const newPermission: any = {
      permission: {
        allow_aggregations: !!payload.allowAggregation,
        columns: '*',
        filter: {},
      },
      role: payload.roleName,
    }

    if (payload.context) {
      switch (payload.context) {
        case 'company': {
          newPermission.permission = {
            ...newPermission.permission,
            filter: {
              company_id: { _eq: 'x-hasura-company-id' },
            },
          }
          break
        }
        case 'warehouse': {
          newPermission.permission = {
            ...newPermission.permission,
            filter: {
              warehouse_id: { _eq: 'x-hasura-warehouse-id' },
            },
          }
        }
      }
    }

    _target.select_permissions.push(newPermission)
  }

  const yamlString = yamljs.stringify(_target, Infinity, 2)
  const formattedYamlString = prettier.format(yamlString, { parser: 'yaml' })

  await fsp.writeFile(
    path.resolve(
      SOURCE_FOLDER,
      `${_target.table.schema}_${_target.table.name}.yaml`
    ),
    formattedYamlString
  )

  return { success: true, message: 'success' }
}

export const mergeRole = async (payload: { from: string; to: string }) => {
  const tableMap = await getTableMap()
  const rolesMap = await getRolesMap(tableMap)
  const targetTables =
    rolesMap.find(n => n.roleName === payload.from)?.tables ?? []

  const promises = targetTables.map(t => {
    return addTableToPermission({
      roleName: payload.to,
      tableName: `${t.schema}_${t.name}`,
      allowAggregation: !!t.permission.allow_aggregations,
      context: t.permission.filter?.company_id
        ? 'company'
        : t.permission.filter?.warehouse_id
        ? 'warehouse'
        : undefined,
    })
  })

  try {
    await Promise.all(promises)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
