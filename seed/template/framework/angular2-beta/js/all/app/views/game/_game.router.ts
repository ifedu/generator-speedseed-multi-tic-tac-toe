import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { GameComponent } from './_game.component'

const ROUTES: Routes = [{
    component: GameComponent,
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