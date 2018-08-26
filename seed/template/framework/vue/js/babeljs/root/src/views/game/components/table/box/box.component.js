const css = require('./box.style')
const html = require('./box')

let mark = 'X'

class SSBox extends HTMLElement {
    constructor() {
        super()

        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
            <style>
                ${css}
            </style>
            ${html}
        `

        this.addEventListener('mousedown', function (e) {
            const img = this.shadowRoot.querySelector('img')

            if (img.classList.contains('hide') === false) return

            mark = (mark === 'X') ? 'O' : 'X'

            img.classList.remove('hide')
            img.setAttribute('src', `assets/${mark}.png`)
        })
    }

    get mark() {
        console.log('get')
        return 'lol'
    }

    set mark(val) {
        console.log('set')
    }
}

window.customElements.define('ss-box', SSBox)
