import { module } from 'angular'

import Box from './box/box'

export default class Table {
    constructor() {
        module('myproject')
        .component('ssTable', {
            template: `{%= include('table.html') %}`,

            controller() {
                this.xo = ''
            }
        })

        new Box()
    }
}
