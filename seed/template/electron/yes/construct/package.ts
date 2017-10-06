export default {
    "devDependencies": {
        "@types/electron-packager": "8.7.3",
        "electron": "1.7.8",
        "electron-packager": "9.1.0"
    },
    "scripts": {
        "electron-packager": "electron-packager",
        "electron.dev": "gulp electron.dev --dev --electron",
        "electron.dist": "gulp electron.dist --dist --electron",
        "electron.packager": "gulp electron.packager",
        "electron.packager.dev": "gulp electron.packager.dev --dev",
        "electron.packager.dist": "gulp electron.packager.dist --dist",
        "electron.run": "gulp electron.run --electron"
    },
}
