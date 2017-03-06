import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { LoginComponent } from './_login.component'
import { LoginRouter } from './_login.router'

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