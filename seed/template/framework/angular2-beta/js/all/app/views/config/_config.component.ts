import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'sd-config',
  template: `{%= include('config.html') %}`
})
export class ConfigComponent {
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