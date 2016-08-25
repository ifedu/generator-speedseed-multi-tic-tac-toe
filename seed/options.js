module.exports = [
    {
        message: 'Library / Framework?',
        name: 'framework',
        route: true,

        choices: [
            { name: 'AngularJS', value: 'angularjs' },
            { name: 'Angular2', value: 'angular2' },
            { name: 'jQuery', value: 'jquery' },
            { name: 'Polymer', value: 'polymer' },
            { name: 'React', value: 'react' },
            { name: 'VanillaJS', value: 'vanillajs' }
        ]
    }, {
        message: 'JavaScript Compiler?',
        name: 'compiler',

        choices: [
            { name: 'BabelJS', value: 'babeljs', extra: 'js' },
            { name: 'CoffeeScript', value: 'coffeescript', extra: 'coffee',
                exclude: {
                    framework: ['angular2', 'react']
                }
            },
            { name: 'TypeScript', value: 'typescript', extra: 'ts',
                exclude: {
                    framework: ['react']
                }
            }
        ]
    }, {
        message: 'CSS?',
        name: 'css',

        choices: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' },
            { name: 'CSS', value: 'css' }
        ]
    }, {
        message: 'HTML?',
        name: 'html',

        choices: [
            { name: 'Jade', value: 'jade' },
            { name: 'HTML', value: 'html' }
        ]
    }, {
        message: 'Unit test?',
        name: 'unit-test',

        choices: [
            { name: 'No', value: 'no' },
            { name: 'Mocha', value: 'mocha',
                exclude: {
                    framework: ['angular2', 'jquery', 'polymer', 'react', 'vanillajs']
                }
            },
            { name: 'Jasmine', value: 'jasmine',
                exclude: {
                    framework: ['angular2', 'jquery', 'polymer', 'react', 'vanillajs']
                }
            }
        ]
    }
]