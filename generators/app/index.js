'use strict'

const $ = require('../_config.js')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments)

        this.config.set('component', '')

        this.config.set('compiler', this.options.compiler)
        this.config.set('coreVersion', this.options.coreVersion)
        this.config.set('css', this.options.css)
        this.config.set('framework', this.options.framework)
        this.config.set('project', this.options.project)
        this.config.set('template', this.options.template)
        this.config.set('test', this.options.test)
    },

    write() {
        require('./files/_core-config.js').call(this)
        require('./files/_package.js').call(this)

        const css = this.config.get('css')
        const compiler = this.config.get('compiler')
        const component = this.config.get('component')
        const framework = this.config.get('framework')
        const template = this.config.get('template')
        const test = this.config.get('test')

        this.config.set('compilerExt', $.ext[compiler])
        const compilerExt = this.config.get('compilerExt')

        const create = $.create.bind(this)

        const seed = '../../../seed'

        const route = `${seed}/template/${template}`

        // COMPILER
        if (compiler === 'typescript') {
            create(`${route}/all/compiler/${compiler}/tsconfig.json`, './tsconfig.json')
            create(`${route}/${framework}/compiler/${compiler}/typings`, './typings')
            create(`${route}/${framework}/compiler/${compiler}/typings.json`, './typings.json')
        }

        if (template !== 'no') {
            // FRAMEWORK
            create(`${route}/all/compiler/${compiler}/app`, './app', true)
            create(`${route}/${framework}/compiler/all/app`, './app', true)
            create(`${route}/${framework}/compiler/${compiler}/app`, './app', true)
            // CSS
            create(`${route}/all/css/${css}/app`, './app', true)
            create(`${route}/${framework}/css/${css}/app`, './app', true)
            // SERVER
            create(`${route}/all/server/**/*`, './server', true)
        }

        // TEST
        if (test !== 'no') {
            create(`${seed}/test/${test}/karma.conf.js`, './.core/karma.conf.js', false)
        }
    }
})