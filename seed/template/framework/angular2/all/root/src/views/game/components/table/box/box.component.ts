import { Component } from '@angular/core'

@Component({
    selector: 'ss-box',
    styles: [require('./box.style')],
    template: require('./box'),
})
export class SSBoxComponent {
    static xo = ''

    xo: any

    push() {
        if (this.xo !== undefined) return

        SSBoxComponent.xo = (SSBoxComponent.xo === 'O') ? 'X' : 'O'
        this.xo = SSBoxComponent.xo
    }
}
