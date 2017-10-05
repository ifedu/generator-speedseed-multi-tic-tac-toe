import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { UserView } from './user.view'
import { UserRouter } from './user.router'

@NgModule({
    declarations: [UserView],

    exports: [UserView],

    imports: [
        CommonModule,
        FormsModule,
        UserRouter
    ]
})
export class UserModule {}
