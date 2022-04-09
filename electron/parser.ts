import os from 'os'
import path from 'path'
import fs from 'fs/promises'
import esbuild from 'esbuild'
import { queryParserTemplate } from './template'

const scriptPath = path.join(os.tmpdir(), 'copilot-parser.js')

export const parseGraphqlQuery = async (inputPath: string) => {
  try {
    const scriptStr = queryParserTemplate.replace('__template__', inputPath)
    esbuild.build({})
    // await fs.writeFile(
    //   scriptPath,
    //   ,
    //   'utf-8'
    // )
  } catch (error) {}
}
