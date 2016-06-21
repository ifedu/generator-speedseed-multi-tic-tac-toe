import { Component } from '@angular/core'
import { SSBox } from './../box/main'

@Component({
    directives: [SSBox],
    selector: 'ss-table',
    template: `{%= include('tpl.html') %}`
})

export class SSTable { }