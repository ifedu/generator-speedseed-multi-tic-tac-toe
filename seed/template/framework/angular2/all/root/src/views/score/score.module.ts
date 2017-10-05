import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ScoreView } from './score.view'
import { ScoreRouter } from './score.router'
import { UserModule } from './user/user.module'

@NgModule({
    declarations: [
        ScoreView
    ],

    exports: [ScoreView],

    imports: [
        CommonModule,

        ScoreRouter,
        UserModule
    ]
})
export class ScoreModule {}
