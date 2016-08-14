angular
.module('<%= project %>')
.component('ssTable', {
    template: `{%= include('table.html') %}`,

    controller() {
        this.xo = ''
    }
})