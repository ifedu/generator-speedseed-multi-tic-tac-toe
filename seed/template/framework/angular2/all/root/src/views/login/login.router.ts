import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginView } from './login.view'

const ROUTES: Routes = [{
    component: LoginView,
    path: 'login',
    pathMatch: 'full'
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class LoginRouter {}
