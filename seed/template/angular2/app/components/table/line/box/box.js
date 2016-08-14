import { Component } from '@angular/core'

@Component({
    selector: 'ss-box',
    styles: [`{%= include('box.css') %}`],
    template: `{%= include('box.html') %}`
})

export class SSBox {
    constructor() {
        this.xo = ''
    }

    push() {
        SSBox.xo = (SSBox.xo === 'O') ? 'X' : 'O'
        this.xo = SSBox.xo
    }
}