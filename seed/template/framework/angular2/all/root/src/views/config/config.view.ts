import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  styles: [require('./config.style')],
  template: require('./config'),
})
export class ConfigView {
    constructor(
        private router: Router
    ) {}

    game() {
        this.router.navigate(['/game'])
    }

    score() {
        this.router.navigate(['/score'])
    }
}
