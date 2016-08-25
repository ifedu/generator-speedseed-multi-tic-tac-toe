module.exports = ($) => {
    const bowerJson = {
        name: `${$.project} with ${$.template}`,
        private: true,

        dependencies: {}
    }

    const getCompiler = {
        babeljs: {},
        coffeescript: {},
        typescript: {}
    }

    const getCss = {
        less: {},
        sass: {},
        scss: {},
        styl: {}
    }

    const getFramework = {
        angularjs: {},
        angular2: {},
        jquery: {},

        polymer: {
            'Polymer': '^1.6.0'
        },

        react: {},
        vanillajs: {}
    }

    const getFrameworkDev = {
        angularjs: {},
        angular2: {},
        jquery: {},
        polymer: {},
        react: {},
        vanillajs: {}
    }

    const getTest = {
        no: {},
        jasmine: {},
        mocha: {}
    }

    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.readFile('./bower.json', bowerJson)

    const extend = require('extend')

    extend(
        true,
        bowerJson.dependencies,
        getFramework[$.framework]
    )

    extend(
        true,
        bowerJson.devDependencies,
        getCompiler[$.compiler],
        getCss[$.css],
        getFrameworkDev[$.framework],
        getTest[$.test]
    )

    file.writeFile('bower.json', 2, bowerJson)
}