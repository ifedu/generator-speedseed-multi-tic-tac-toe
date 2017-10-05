import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { ConfigRouter } from './config.router'
import { ConfigView } from './config.view'

@NgModule({
    declarations: [ConfigView],

    exports: [ConfigView],

    imports: [
        CommonModule,
        FormsModule,
        ConfigRouter
    ]
})
export class ConfigModule {}
