import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ConfigView } from './config.view'

const ROUTES: Routes = [{
    component: ConfigView,
    path: 'config',
    pathMatch: 'full'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class ConfigRouter {}
