module.exports = function () {
    const getCompiler = {
        babeljs: {
        },

        coffeescript: {
            'gulp-coffee': '^2.3.2',
        },

        typescript: {
            'gulp-typescript': '^2.13.6',
            'typings': "^1.0.5"
        }
    }

    const getCss = {
        less: {
            'gulp-less': '^3.1.0',
        },

        sass: {
            'gulp-sass': '^2.3.1',
        },

        scss: {
            'gulp-sass': '^2.3.1',
        },

        styl: {
            'gulp-stylus': '^2.0.5',
        }
    }

    const getFramework = {
        angularjs: {
            'angular': '^1.5.6'
        },

        angular2: {
            '@angular/common': '2.0.0-rc.2',
            '@angular/compiler': '2.0.0-rc.2',
            '@angular/core': '2.0.0-rc.2',
            '@angular/http': '2.0.0-rc.2',
            '@angular/platform-browser': '2.0.0-rc.2',
            '@angular/platform-browser-dynamic': '2.0.0-rc.2',
            '@angular/router': '2.0.0-rc.2',
            '@angular/router-deprecated': '2.0.0-rc.2',
            '@angular/upgrade': '2.0.0-rc.2',
            'angular2-in-memory-web-api': '0.0.11',
            'bootstrap': '^3.3.6',
            'core-js': '^2.4.0',
            'reflect-metadata': '^0.1.3',
            'rxjs': '5.0.0-beta.6',
            'systemjs': '0.19.27',
            'zone.js': '^0.6.12'
        },

        jquery: {
            'jquery': '^3.0.0'
        },

        polymer: {
            'Polymer': '^1.4.0'
        },

        react: {
            'react': '^15.1.0',
            'react-dom': '^15.1.0'
        },

        vanillajs: {}
    }

    const getFrameworkDev = {
        angularjs: {
            'gulp-ng-annotate': '^2.0.0'
        },

        angular2: {},

        jquery: {},

        polymer: {
            'gulp-size': '^2.1.0',
            'gulp-vulcanize': '^6.1.0'
        },

        react: {
            'gulp-react': '^3.1.0'
        },

        vanillajs: {}
    }

    const getTest = {
        no: {},

        jasmine: {
            'jasmine': '^2.3.1',
            'karma': '^0.13.22',
            'karma-chai': '^0.1.0',
            'karma-chrome-launcher': '^1.0.1',
            'karma-coverage': '^1.0.0',
            'karma-jasmine': '^1.0.2',
            'karma-mocha': '^1.0.1',
            'karma-phantomjs-launcher': '^1.0.0',
            'phantomjs-prebuilt': '^2.1.7'
        },

        mocha: {
            'chai': '^3.5.0',
            'mocha': '^2.4.5',
            'karma': '^0.13.22',
            'karma-chai': '^0.1.0',
            'karma-chrome-launcher': '^1.0.1',
            'karma-coverage': '^1.0.0',
            'karma-jasmine': '^1.0.2',
            'karma-mocha': '^1.0.1',
            'karma-phantomjs-launcher': '^1.0.0',
            'phantomjs-prebuilt': '^2.1.7'
        }
    }

    const extend = require('extend')
    const fs = require('fs')

    const file = (fs.existsSync('./package.json') === true)
        ? JSON.parse(fs.readFileSync('./package.json', 'utf8'))
        : global.ss.package

    extend(
        true,
        file.dependencies,
        getFramework[this.config.get('framework')]
    )

    extend(
        true,
        file.devDependencies,
        getCompiler[this.config.get('compiler')],
        getCss[this.config.get('css')],
        getFrameworkDev[this.config.get('framework')],
        getTest[this.config.get('test')]
    )

    fs.writeFileSync('package.json', JSON.stringify(file, null, 2))
}