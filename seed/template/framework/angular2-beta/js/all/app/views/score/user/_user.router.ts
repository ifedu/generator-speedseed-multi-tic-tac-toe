import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UserComponent } from './_user.component'

const ROUTES: Routes = [{
    component: UserComponent,
    path: 'user/:num'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class UserRouter {}