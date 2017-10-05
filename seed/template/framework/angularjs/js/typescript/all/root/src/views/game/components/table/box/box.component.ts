import { module } from 'angular'

export default class BoxComponent {
    constructor() {
        module('myproject')
        .component('ssBox', {
            template: require('./box'),

            require: {
                'ssTable': '^ssTable',
            },

            controller() {
                this.push = () => {
                    if (this.xo !== undefined) return

                    this.ssTable.xo = (this.ssTable.xo === 'O') ? 'X' : 'O'

                    this.xo = this.ssTable.xo
                }
            }
        })
    }
}
