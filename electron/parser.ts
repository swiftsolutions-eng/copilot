/* eslint-disable no-async-promise-executor */
import os from 'os'
import path from 'path'
import fs from 'fs/promises'
import esbuild from 'esbuild'
import yamljs from 'yamljs'
import { exec } from 'child_process'
import find from 'find'
import { queryParserTemplate } from './template'

type Definition = {
  name: string
  relations: Definition[]
}

const HASURA_PATH = '/Users/adeyahya/dev/warmindo/hasura'

const findFile = (fname: string): Promise<string | null> => {
  return new Promise(resolve => {
    find.file(fname, HASURA_PATH, result => {
      if (result?.[0]) {
        return resolve(result[0])
      }

      resolve(null)
    })
  })
}

export const parseGraphqlQuery = (inputPath: string): Promise<Definition> => {
  const originalScriptPath = path.join(os.tmpdir(), 'copilot-parser.ts')
  const scriptPath = path.join(os.tmpdir(), 'copilot-parser.js')

  return new Promise(async (resolve, reject) => {
    try {
      const scriptStr = queryParserTemplate.replace('__template__', inputPath)
      await fs.writeFile(originalScriptPath, scriptStr, 'utf-8')
      await esbuild.build({
        entryPoints: [originalScriptPath],
        bundle: true,
        target: 'chrome58',
        outfile: scriptPath,
      })
      exec(`node ${scriptPath}`, function (err, stdout) {
        if (err) {
          reject(err)
          return
        }
        resolve(JSON.parse(stdout))
      })
    } catch (error) {
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

const run = async () => {
  const tables = await parseGraphqlQuery(
    '/Users/adeyahya/dev/wms-core-ui/packages/gqls/queries/inbound/inbound.query.ts'
  )

  const result: any[] = []
  const goThrough = async (def: Definition, fname: string) => {
    const p = await findFile(`${fname}.yaml`)
    const jsonDef = yamljs.load(p!)
    result.push(jsonDef.table)

    const promises: any = def.relations.map(async rel => {
      const objRel = findRelationByName(rel.name, jsonDef.object_relationships)
      const arrRel = findRelationByName(rel.name, jsonDef.array_relationships)

      if (objRel) {
        const _fname = objRel.schema + '_' + objRel.name
        return await goThrough(rel, _fname)
      }

      if (arrRel) {
        const _fname = arrRel.schema + '_' + arrRel.name
        return await goThrough(rel, _fname)
      }
    })

    return await Promise.all(promises)
  }

  await goThrough(tables, tables.name)
  console.log(result)
}

run()
