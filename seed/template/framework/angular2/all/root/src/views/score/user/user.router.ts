import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UserView } from './user.view'

const ROUTES: Routes = [{
    component: UserView,
    path: 'user/:num'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class UserRouter {}
