import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { GameView } from './game.view'

const ROUTES: Routes = [{
    component: GameView,
    path: 'game',
    pathMatch: 'full'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class GameRouter {}
