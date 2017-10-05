import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  template: require('./score'),
})
export class ScoreView {
    constructor(
        private router: Router
    ) {}

    user(num: any) {
        this.router.navigate([`/user/${num}`])
    }
}
