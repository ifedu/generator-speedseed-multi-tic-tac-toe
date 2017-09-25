import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'sd-score',
  template: `/*<= include('score.html') >*/`
})
export class ScoreComponent {
    constructor(
        private router: Router
    ) {}

    user(num: any) {
        this.router.navigate([`/user/${num}`])
    }
}
