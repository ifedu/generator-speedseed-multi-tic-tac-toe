import { Component } from '@angular/core'
import { SSBox } from './line/box/box'

@Component({
    directives: [SSBox],
    selector: 'ss-table',
    styles: [`{%= include('table.css') %}`],
    template: `{%= include('table.html') %}`
})

export class SSTable { }