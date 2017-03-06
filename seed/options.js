const set = (name, value, extra, exclude) => ({ name, value, extra, exclude })

module.exports = [{
    message: 'Library / Framework?',
    name: 'framework',

    choices: [
        set('AngularJS', 'angularjs'),
        set('Angular2', 'angular2'),
        set('Angular2 - Template Beta', 'angular2-beta'),
        set('jQuery', 'jquery'),
        set('Polymer', 'polymer'),
        set('React', 'react'),
        set('VanillaJS', 'vanillajs')
    ],

    options: [{
        message: 'JS?',
        name: 'js',

        choices: [
            set('BabelJS', 'babeljs', 'js', { framework: ['angular2', 'angular2-beta'] }),
            set('CoffeeScript', 'coffeescript', 'coffee', { framework: ['angular2-beta', 'react'] }),
            set('TypeScript', 'typescript', 'ts', { framework: ['react'] })
        ],

        options: [{
            message: 'Unit test?',
            name: 'unit-test',

            choices: [
                set('No', 'no'),
                set('Mocha', 'mocha'),
                set('Jasmine', 'jasmine')
            ]
        }, {
            message: 'Redux?',
            name: 'redux',

            choices: [
                set('No', 'no'),
                set('Redux', 'redux', undefined, { framework: ['angularjs', 'angular2', 'angular2-beta', 'jquery', 'polymer', 'vanillajs'] })
            ]
        }]
    }, {
        message: 'HTML?',
        name: 'html',

        choices: [
            set('Jade', 'jade', undefined, { framework: ['angular2-beta'] }),
            set('HTML', 'html')
        ]
    }]
}, {
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass', 'sass', { framework: ['angular2-beta'] }),
        set('ScSS', 'scss', 'scss'),
        set('Less', 'less', 'less', { framework: ['angular2-beta'] }),
        set('Stylus', 'stylus', 'styl', { framework: ['angular2-beta'] }),
        set('CSS', 'css', { framework: ['angular2-beta'] })
    ]
}]