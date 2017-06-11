import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ConfigComponent } from './config.component'

const ROUTES: Routes = [{
    component: ConfigComponent,
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
