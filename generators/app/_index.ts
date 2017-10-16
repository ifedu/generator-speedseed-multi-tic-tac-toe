import { resolve } from 'path'
import { Helper } from 'speedseed'

const options = require('../../seed/options')
const packageNpm = require('../../package.json')

export default Helper.Yo({
    options,
    packageNpm,
    routeTpl: resolve(__dirname, '../../'),
})
