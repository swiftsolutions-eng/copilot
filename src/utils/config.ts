import { createDir, readDir, readTextFile, writeFile } from '@tauri-apps/api/fs'
import { homeDir, join } from '@tauri-apps/api/path'

export type Config = {
  secret: string
  graphqlUri: string
  hasuraSource: string
  coreUISource: string
}

export const loadConfig = async (): Promise<Config | null> => {
  const HOME_DIR = await homeDir()
  const CONFIG_DIR = `${HOME_DIR}/.config/`
  const CONFIG_FILE = await join(CONFIG_DIR, 'swift-copilot.json')
  try {
    const config = await readTextFile(CONFIG_FILE)
    return JSON.parse(config)
  } catch (err) {
    console.error(err)
    return null
  }
}

export const storeConfig = async (config: Config) => {
  const HOME_DIR = await homeDir()
  const CONFIG_DIR = `${HOME_DIR}/.config/`
  const CONFIG_FILE = await join(CONFIG_DIR, 'swift-copilot.json')

  const configDir = await readDir(CONFIG_DIR)
  const copilotConfig = configDir?.map(c => c.name)?.find(fileName => fileName === 'swift-copilot.json')
  if (copilotConfig == null) await createDir(CONFIG_DIR, { recursive: true })
  await writeFile({path: CONFIG_FILE, contents: JSON.stringify(config, null, 2)})
}
