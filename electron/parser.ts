/* eslint-disable no-async-promise-executor */
import os from 'os'
import path from 'path'
import fs from 'fs/promises'
import esbuild from 'esbuild'
import { exec } from 'child_process'
import { queryParserTemplate } from './template'

type Definition = {
  name: string
  relations: Definition[]
}

const originalScriptPath = path.join(os.tmpdir(), 'copilot-parser.ts')
const scriptPath = path.join(os.tmpdir(), 'copilot-parser.js')

export const parseGraphqlQuery = (inputPath: string): Promise<Definition> => {
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
          console.log(err)
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

parseGraphqlQuery(
  '/Users/adeyahya/dev/wms-core-ui/packages/gqls/queries/inbound/inbound.query.ts'
).then(console.log)
