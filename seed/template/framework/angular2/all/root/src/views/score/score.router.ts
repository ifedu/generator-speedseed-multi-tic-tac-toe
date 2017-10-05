import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ScoreView } from './score.view'

const ROUTES: Routes = [{
    component: ScoreView,
    path: 'score',
    pathMatch: 'full'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class ScoreRouter {}
