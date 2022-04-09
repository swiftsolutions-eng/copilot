import { app, BrowserWindow, ipcMain } from 'electron'
import {
  getRawData,
  addTableToPermission,
  isReady,
  chooseSource,
  mergeRole,
  browseFile,
} from './service'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

function createWindow() {
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function registerListeners() {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })

  ipcMain.on('browse-file', event => {
    browseFile().then(filePath => {
      event.reply('browse-file-reply', filePath)
    })
  })

  ipcMain.on('choose-source', event => {
    chooseSource()
      .then()
      .finally(() => {
        event.reply('is-ready', isReady())
      })
  })

  ipcMain.on('fetch-raw', event => {
    getRawData().then(raw => {
      event.reply('fetch-raw-resolved', raw)
    })
  })

  ipcMain.on('save-permission', (event, payload) => {
    addTableToPermission(payload).then(response => {
      event.reply('save-permission-resolved', response)
    })
  })

  ipcMain.on('merge-role', (event, payload) => {
    mergeRole(payload).then(response => {
      event.reply('merge-role-resolved', response)
    })
  })

  ipcMain.on('add-role', async (event, payload) => {
    Promise.all(
      payload.tables.map(
        (table: {
          name: string
          allowAggregation: boolean
          context: 'warehouse' | 'company'
        }) =>
          addTableToPermission({
            roleName: payload.role,
            tableName: table.name,
            allowAggregation: table.allowAggregation,
            context: table.context,
          })
      )
    ).then(response => {
      event.reply('add-role-resolved', response)
    })
  })
}

app
  .on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
