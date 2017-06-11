import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { ConfigComponent } from './config.component'
import { ConfigRouter } from './config.router'

@NgModule({
    declarations: [ConfigComponent],

    exports: [ConfigComponent],

    imports: [
        CommonModule,
        FormsModule,
        ConfigRouter
    ]
})
export class ConfigModule {}
