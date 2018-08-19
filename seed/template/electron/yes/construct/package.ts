export default {
    "devDependencies": {
        "@types/electron-packager": "12.0.0",
        "electron": "2.0.8",
        "electron-packager": "12.1.1",
    },
    "scripts": {
        "postinstall": "cd electron-src && npm i",

        "electron-packager": "electron-packager",
        "electron.dev": "gulp electron.dev --electron --dev",
        "electron.dist": "gulp electron.dist --electron --dist",
        "electron.packager": "gulp electron.packager",
        "electron.packager.dev": "gulp electron.packager.dev --electron --dev",
        "electron.packager.dist": "gulp electron.packager.dist --electron --dist",
        "electron.run": "gulp electron.run --electron",
    },
}
