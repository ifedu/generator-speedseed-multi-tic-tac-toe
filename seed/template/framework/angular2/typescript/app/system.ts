/// <reference path="../typings/index.d.ts" />

((global) => {
    System.config({
        map: {
            'app': './',
            'rxjs': 'vendor/rxjs',
            'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',

            '@angular': 'vendor/@angular'
        },

        packages: {
            'app': { main: 'js/main.js' },
            'angular2-in-memory-web-api': { main: 'index.js' },
            'rxjs': { main: '/bundles/Rx.umd.min.js' },
            'rxjs/Observable' : { main: '../bundles/Rx.umd.min.js' },
            'rxjs/Subject' : { main: '../bundles/Rx.umd.min.js' },
            'rxjs/operator/toPromise' : { main: '../../bundles/Rx.umd.min.js' },
            'rxjs/observable/PromiseObservable' : { main: '../../bundles/Rx.umd.min.js' },
            'rxjs/util/root' : { main: '../../bundles/Rx.umd.min.js' },

            '@angular/common': { main: 'bundles/common.umd.min.js' },
            '@angular/compiler': { main: '/bundles/compiler.umd.min.js' },
            '@angular/core': { main: '/bundles/core.umd.min.js' },
            '@angular/http': { main: '/bundles/http.umd.min.js' },
            '@angular/platform-browser': { main: 'bundles/platform-browser.umd.min.js' },
            '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.min.js' },
            '@angular/router': { main: '/bundles/router.umd.min.js' }
        }
    })

    System.import('app').catch((err) => console.error(err))
})(this)