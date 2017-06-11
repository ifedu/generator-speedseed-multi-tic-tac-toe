import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ScoreComponent } from './score.component'
import { ScoreRouter } from './score.router'
import { UserModule } from './user/user.module'

@NgModule({
    declarations: [
        ScoreComponent
    ],

    exports: [ScoreComponent],

    imports: [
        CommonModule,

        ScoreRouter,
        UserModule
    ]
})
export class ScoreModule {}
