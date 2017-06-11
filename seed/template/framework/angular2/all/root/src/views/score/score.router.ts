import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ScoreComponent } from './score.component'

const ROUTES: Routes = [{
    component: ScoreComponent,
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
