export default {
    "devDependencies": {
        "@types/electron-packager": "8.7.3",
        "electron": "1.7.9",
        "electron-packager": "10.1.0",
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
