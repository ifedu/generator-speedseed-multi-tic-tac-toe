import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'sd-login',
  template: `/*<= include('login.html') >*/`
})
export class LoginComponent {
    constructor(
        private router: Router
    ) {}

    login() {
        this.router.navigate(['/config'])
    }
}
