import { Component } from '@angular/core'

@Component({
    selector: 'ss-line',
    styles: [`{%= include('line.css') %}`],
    template: `{%= include('line.html') %}`
})
export class SSLine { }