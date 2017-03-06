import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { UserComponent } from './_user.component'
import { UserRouter } from './_user.router'

@NgModule({
    declarations: [UserComponent],

    exports: [UserComponent],

    imports: [
        CommonModule,
        FormsModule,
        UserRouter
    ]
})
export class UserModule {}