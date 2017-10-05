import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { GameView } from './game.view'
import { GameRouter } from './game.router'
import { SSTableComponent } from './components/table/table.component'
import { SSBoxComponent } from './components/table/box/box.component'

@NgModule({
    declarations: [
        GameView,
        SSTableComponent,
        SSBoxComponent,
    ],

    exports: [GameView],

    imports: [
        CommonModule,
        FormsModule,
        GameRouter,
    ]
})
export class GameModule {}
