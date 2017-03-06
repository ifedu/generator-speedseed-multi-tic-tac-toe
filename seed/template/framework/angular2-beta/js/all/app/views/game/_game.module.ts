import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { GameComponent } from './_game.component'
import { SSTable } from './components/table/_table'
import { SSLine } from './components/table/line/_line'
import { SSBox } from './components/table/line/box/_box'
import { GameRouter } from './_game.router'

@NgModule({
    declarations: [
        GameComponent,
        SSTable,
        SSLine,
        SSBox
    ],

    exports: [GameComponent],

    imports: [
        CommonModule,
        FormsModule,
        GameRouter
    ]
})
export class GameModule {}