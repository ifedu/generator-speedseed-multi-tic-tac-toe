import 'core-js/client/shim.min.js'
import 'zone.js/dist/zone.js'

/*< if (args.dist) { >*/
import { enableProdMode } from '@angular/core'
/*< } >*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './views/app.module'

/*< if (args.electron) { >*/
/*[
const os = require('os')
console.log(os.cpus())
]*/
/*< } >*/

/*< if (args.dist) { >*/
enableProdMode()
/*< } >*/

platformBrowserDynamic()
.bootstrapModule(AppModule)
