/// <reference path="../../../typings/index.d.ts" />

angular
.module('<%= project %>')
.component('ssTable', {
    template: `{%= include('tpl.html') %}`,

    controller() {
        this.xo = ''
    }
})