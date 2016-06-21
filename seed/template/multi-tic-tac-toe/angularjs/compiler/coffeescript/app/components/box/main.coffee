angular
.module('<%= project %>')
.component('ssBox', {
    template: '{%= include("tpl.html") %}',

    require: {
        'ssTable': '^ssTable',
    },

    controller: () ->
        self = this

        this.push = () ->
            self.ssTable.xo = if (self.ssTable.xo == 'O') then 'X' else 'O'

            self.xo = self.ssTable.xo

        true
})