import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { LoginComponent } from './login.component'
import { LoginRouter } from './login.router'

@NgModule({
  declarations: [LoginComponent],

  exports: [LoginComponent],

  imports: [
    CommonModule,
    FormsModule,
    LoginRouter
  ]
})
export class LoginModule {}
