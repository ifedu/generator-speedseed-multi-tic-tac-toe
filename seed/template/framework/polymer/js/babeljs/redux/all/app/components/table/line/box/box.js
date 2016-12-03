(() => {
let xo = 'O'

Polymer({
    is: 'ss-box',

    properties: {
        hide: {
            value: 'hide'
        }
    },

    push (e) {
        if (this.xo !== undefined) return

        xo = (xo === 'O') ? 'X' : 'O'

        this.hide = ''

        this.xo = xo
        this.src = `assets/${xo}.png`
    }
})
})()