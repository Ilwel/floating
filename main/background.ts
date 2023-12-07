import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 350,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
    },
    frame: false,
    titleBarStyle: 'hidden',
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    resizable: false,
  })

  mainWindow.setAlwaysOnTop(true, 'screen-saver')

  ipcMain.on('minimize', async () => {
    mainWindow.resizable = true
    mainWindow.setSize(300, 50)
    mainWindow.resizable = false
  })

  ipcMain.on('maximize', async () => {
    mainWindow.resizable = true
    mainWindow.setSize(350, 400)
    mainWindow.resizable = false
  })

  ipcMain.on('close', async () => {
    mainWindow.close()
  })  

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
