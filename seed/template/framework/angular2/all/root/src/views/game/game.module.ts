import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { GameComponent } from './game.component'
import { GameRouter } from './game.router'
import { SSTable } from './components/table/table'
import { SSBox } from './components/table/box/box'

@NgModule({
    declarations: [
        GameComponent,
        SSTable,
        SSBox,
    ],

    exports: [GameComponent],

    imports: [
        CommonModule,
        FormsModule,
        GameRouter,
    ]
})
export class GameModule {}
