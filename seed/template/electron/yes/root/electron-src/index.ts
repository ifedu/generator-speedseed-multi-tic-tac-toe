import { app, BrowserWindow } from 'electron'

app.on('before-quit', () => {
    console.log('Leaving...')
})

app.on('ready', () => {
    let win: any = new BrowserWindow({
        center: true,
        height: 800,
        maximizable: true,
        title: 'SpeedSeed',
        width: 1000,
    })

    win.on('closed', () => {
        win = null

        app.quit()
    })

    win.loadURL(`file://${__dirname}/-build/index.html`)

    win.toggleDevTools()
})
