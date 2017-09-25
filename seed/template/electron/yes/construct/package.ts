export default {
    "devDependencies": {
        "electron": "1.7.8",
    },
    "scripts": {
        "electron": "electron ./electron/main.ts --electron",
        "electron.dev": "gulp electron.dev --dev --electron",
        "electron.dist": "gulp electron.dist --dist --electron",
        "electron.run": "gulp electron.run --electron",
    },
}
