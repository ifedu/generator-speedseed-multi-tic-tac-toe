const css = require('./table.style')
const html = require('./table')

class SSTable extends HTMLElement {
    constructor() {
        super()

        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
            <style>
                ${css}
            </style>
            ${html}
        `
    }
}

window.customElements.define('ss-table', SSTable)
