const compiler = {
    BabelJS: true,
    Coffeescript: true,
    TypeScript: true
}

const css = {
    SaSS: true,
    ScSS: true,
    Less: true,
    Stylus: true
}

module.exports = {
    framework: {
        AngularJS: {
            compiler,
            css
        },

        Angular2: {
            compiler: {
                BabelJS: true,
                TypeScript: true
            },

            css
        },

        jQuery: {
            compiler,
            css
        },

        Polymer: {
            compiler,
            css
        },

        React: {
            compiler: {
                BabelJS: true
            },

            css
        },

        VanillaJS: {
            compiler,
            css
        }
    },

    test: {
        Mocha: true,
        Jasmine: true
    }
}