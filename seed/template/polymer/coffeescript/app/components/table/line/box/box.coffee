xo = 'O'

Polymer({
    is: 'ss-box',

    properties: {
        hide: {
            value: 'hide'
        }
    },

    push: (e) ->
        if (this.xo == undefined)
            xo = if (xo == 'O') then 'X' else 'O'

            this.hide = ''

            this.xo = xo
            this.src = "assets/#{xo}.png"
})