/// <reference path="../../../typings/index.d.ts" />

angular
.module('<%= project %>')
.component('ssTable', {
    template: `{%= include('table.html') %}`,

    controller() {
        this.xo = ''
    }
})