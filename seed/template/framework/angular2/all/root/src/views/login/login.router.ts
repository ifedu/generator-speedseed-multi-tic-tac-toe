import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login.component'

const ROUTES: Routes = [{
    component: LoginComponent,
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
