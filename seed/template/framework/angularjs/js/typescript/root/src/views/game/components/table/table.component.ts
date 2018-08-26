import { module } from 'angular'

import BoxComponent from './box/box.component'

export default class TableComponent {
    constructor() {
        module('myproject')
        .component('ssTable', {
            template: require('./table'),

            controller() {
                this.xo = ''
            }
        })

        new BoxComponent()
    }
}
