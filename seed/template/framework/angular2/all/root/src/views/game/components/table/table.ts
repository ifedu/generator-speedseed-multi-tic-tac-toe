import { Component } from '@angular/core'

@Component({
    selector: 'ss-table',
    styles: [`{%= include('table.css') %}`],
    template: `{%= include('table.html') %}`
})
export class SSTable { }
