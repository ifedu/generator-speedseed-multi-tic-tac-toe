import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  styles: [require('./login.style')],
  template: require('./login'),
})
export class LoginView {
    constructor(
        private router: Router
    ) {}

    login() {
        this.router.navigate(['/config'])
    }
}
