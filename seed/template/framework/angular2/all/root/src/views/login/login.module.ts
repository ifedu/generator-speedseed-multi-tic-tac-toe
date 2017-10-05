import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { LoginView } from './login.view'
import { LoginRouter } from './login.router'

@NgModule({
  declarations: [LoginView],

  exports: [LoginView],

  imports: [
    CommonModule,
    FormsModule,
    LoginRouter
  ]
})
export class LoginModule {}
