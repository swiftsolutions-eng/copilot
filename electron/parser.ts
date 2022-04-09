/* eslint-disable no-async-promise-executor */
import os from 'os'
import path from 'path'
import fs from 'fs/promises'
import yaml from 'js-yaml'
import { exec } from 'child_process'
import find from 'find'
import { sortBy } from 'lodash'
import { gql } from '@apollo/client'
import { loadConfig } from './config'
import { createApolloClient } from './apolloClient'
import { queryParserTemplate } from './template'

type Definition = {
  name: string
  relations: Definition[]
}

type TableDef = {
  name: string
  schema: string
  context: 'warehouse' | 'company' | null
}

const execEsBuild = async (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, function (err) {
      if (err) {
        reject(err)
        return
      }
      resolve(null)
    })
  })
}

const findFile = async (fname: string): Promise<string | null> => {
  const config = await loadConfig()
  return new Promise(resolve => {
    find.file(fname, config?.hasuraSource ?? '', result => {
      if (result?.[0]) {
        return resolve(result[0])
      }

      resolve(null)
    })
  })
}

let instrospectionCache: any = null
const getInstrospection = async () => {
  if (instrospectionCache !== null) return instrospectionCache
  const config = await loadConfig()
  const apolloClient = createApolloClient(
    config?.graphqlUri ?? '',
    config?.secret ?? ''
  )
  const { data } = await apolloClient.query({
    query: gql`
      {
        __schema {
          queryType {
            name
          }
          types {
            name
            description
            name
            kind
            fields {
              type {
                name
                description
              }
              name
              type {
                fields {
                  name
                }
              }
            }
          }
        }
      }
    `,
  })

  instrospectionCache = data
  return data
}

export const parseGraphqlQuery = (inputPath: string): Promise<Definition> => {
  const originalScriptPath = path.join(os.tmpdir(), 'copilot-parser.ts')
  const scriptPath = path.join(os.tmpdir(), 'copilot-parser.js')

  return new Promise(async (resolve, reject) => {
    try {
      const scriptStr = queryParserTemplate.replace('__template__', inputPath)
      await fs.writeFile(originalScriptPath, scriptStr, 'utf-8')
      await execEsBuild(
        `npx esbuild ${originalScriptPath} --bundle --target=chrome58 --outfile=${scriptPath}`
      )
      exec(`node ${scriptPath}`, function (err, stdout) {
        if (err) {
          reject(err)
          return
        }
        resolve(JSON.parse(stdout))
      })
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

const findRelationByName = (
  name: string,
  relations: any[]
): { schema: string; name: string } | null => {
  const _found = relations?.find?.(n => n.name === name)
  if (_found) {
    return (
      _found?.using?.manual_configuration?.remote_table ??
      _found?.using?.foreign_key_constraint_on?.table
    )
  }

  return null
}

const getQueryContext = async (
  queryName: string
): Promise<'warehouse' | 'company' | null> => {
  const instrospection = await getInstrospection()
  const query = instrospection?.__schema?.types?.find(
    (item: any) => item.name === queryName
  )

  const isHasWarehouse = query?.fields?.find(
    (item: any) => item.name === 'warehouse_id'
  )

  if (isHasWarehouse) return 'warehouse'

  const isHasCompany = query?.fields?.find(
    (item: any) => item.name === 'company_id'
  )

  if (isHasCompany) return 'company'

  return null
}

const addQueryPermission = async (
  jsonDef: any,
  fpath: string,
  role: string,
  context: 'warehouse' | 'company' | null
) => {
  const _jsonDef = jsonDef
  // remove current role
  _jsonDef.select_permissions = _jsonDef.select_permissions.filter(
    (item: any) => {
      return item.role !== role
    }
  )

  // add new role
  _jsonDef.select_permissions.push({
    permission: {
      columns: '*',
      filter:
        context === 'warehouse'
          ? {
              warehouse_id: {
                _eq: 'x-hasura-warehouse-id',
              },
            }
          : context === 'company'
          ? {
              company_id: {
                _eq: 'x-hasura-company-id',
              },
            }
          : {},
    },
    role,
  })
  _jsonDef.select_permissions = sortBy(_jsonDef.select_permissions, 'role')

  const yamlString = yaml.dump(_jsonDef, {
    noArrayIndent: true,
    quotingType: '"',
  })

  await fs.writeFile(fpath, yamlString)
}

export const addRoleToQuery = async (
  sourceFile: string,
  role: string
): Promise<TableDef[]> => {
  const tables = await parseGraphqlQuery(sourceFile)

  const result: TableDef[] = []
  const walker = async (def: Definition, fname: string) => {
    const absFile = await findFile(`${fname}.yaml`)
    const yamlText = await fs.readFile(absFile!, 'utf-8')
    const jsonDef = yaml.load(yamlText) as any
    const formattedName = jsonDef.table.schema + '_' + jsonDef.table.name
    const context = await getQueryContext(formattedName)
    await addQueryPermission(jsonDef, absFile!, role, context)
    result.push({ ...jsonDef.table, context })

    const promises: any = def.relations.map(async rel => {
      const objRel = findRelationByName(rel.name, jsonDef.object_relationships)
      const arrRel = findRelationByName(rel.name, jsonDef.array_relationships)

      if (objRel) {
        const _fname = objRel.schema + '_' + objRel.name
        return await walker(rel, _fname)
      }

      if (arrRel) {
        const _fname = arrRel.schema + '_' + arrRel.name
        return await walker(rel, _fname)
      }
    })

    return await Promise.all(promises)
  }

  await walker(tables, tables.name)
  return result
}
