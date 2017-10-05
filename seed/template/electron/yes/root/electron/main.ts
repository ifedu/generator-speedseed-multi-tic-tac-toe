const { app, BrowserWindow } = require('electron')

app.on('before-quit', () => {
    console.log('Saliendo...')
})

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1000,
        height: 800,
        title: 'SpeedSeed',
        center: true,
        maximizable: true,
    })

    win.on('closed', () => {
        win = null

        app.quit()
    })

    win.loadURL(`file://${process.cwd()}/-build/index.html`)
})
