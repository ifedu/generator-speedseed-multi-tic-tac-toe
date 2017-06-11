import { resolve } from 'path'
import { Helper } from 'speedseed'

import { options } from '../../seed/options'

export default Helper.Yo({
    options,
    routeTpl: resolve(__dirname, '../../'),
})
