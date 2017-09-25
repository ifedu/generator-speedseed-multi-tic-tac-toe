import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

let useHash: boolean = false
/*< if (args.electron) { >*/
useHash = true
/*< } >*/

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forRoot([], { useHash })
    ]
})
export class AppRouter {}
