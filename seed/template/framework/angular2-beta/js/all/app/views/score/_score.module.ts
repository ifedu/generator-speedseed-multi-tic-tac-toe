import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { ScoreComponent } from './_score.component'
import { ScoreRouter } from './_score.router'

import { UserModule } from './user/_user.module'

@NgModule({
    declarations: [
        ScoreComponent
    ],

    exports: [ScoreComponent],

    imports: [
        CommonModule,
        FormsModule,

        ScoreRouter,
        UserModule
    ]
})
export class ScoreModule {}