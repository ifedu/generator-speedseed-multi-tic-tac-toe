import { spawn } from 'child_process'

spawn('electron', ['./electron/ts'], {
    shell: true,
    stdio: 'inherit'
})
