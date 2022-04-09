import path from 'path'
import os from 'os'
import fs from 'fs/promises'

const HOME_DIR = os.homedir()
const CONFIG_DIR = `${HOME_DIR}/.config/`
const CONFIG_FILE = path.join(CONFIG_DIR, 'swift-copilot.json')

type Config = {
  secret: string
  graphqlUri: string
  hasuraSource: string
}

export const loadConfig = async (): Promise<Config | null> => {
  try {
    const config = await fs.readFile(CONFIG_FILE, 'utf8')
    return JSON.parse(config)
  } catch (err) {
    return null
  }
}

export const storeConfig = async (config: Config) => {
  await fs.mkdir(CONFIG_DIR, { recursive: true })
  await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2))
}
