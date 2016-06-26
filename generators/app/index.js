const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)

        super.configSet()
    }

    paths() {
        super.paths()
    }

    prompting() {
        super.promptingOptions({
            framework: {
                AngularJS: true,
                Angular2: true,
                jQuery: true,
                Polymer: true,
                React: true,
                VanillaJS: true
            },

            compiler: {
                BabelJS: true,
                Coffeescript: false,
                TypeScript: true
            },

            css: {
                SaSS: true,
                ScSS: true,
                Less: true,
                Stylus: true,
            },

            test: {
                Mocha: true,
                Jasmine: true
            }
        })
    }

    write() {
        const $ = super.configGet()

        const route = `seed/template/${$.template}`

        // FRAMEWORK
        super.create(`${route}/all/compiler/${$.compiler}/app`, './app', true)
        super.create(`${route}/${$.framework}/compiler/all/app`, './app', true)
        super.create(`${route}/${$.framework}/compiler/${$.compiler}/app`, './app', true)
        // CSS
        super.create(`${route}/all/css/${$.css}/app`, './app', true)
        super.create(`${route}/${$.framework}/css/${$.css}/app`, './app', true)
        // SERVER
        super.create(`${route}/all/server/**/*`, './server', true)

        // COMPILER
        if ($.compiler === 'typescript') {
            super.create(`${route}/all/compiler/${$.compiler}/tsconfig.json`, './tsconfig.json')
            super.create(`${route}/${$.framework}/compiler/${$.compiler}/typings`, './typings')
            super.create(`${route}/${$.framework}/compiler/${$.compiler}/typings.json`, './typings.json')
        }

        // TEST
        if ($.test !== 'no') {
            super.create(`seed/test/${$.test}/karma.conf.js`, './.core/karma.conf.js', false)
        }
    }
}