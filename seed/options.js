module.exports = [
    {
        message: 'Library / Framework?',
        name: 'framework',

        choices: [
            { name: 'AngularJS', value: 'angularjs' },
            { name: 'Angular2', value: 'angular2' },
            { name: 'jQuery', value: 'jquery' },
            { name: 'Polymer', value: 'polymer' },
            { name: 'React', value: 'react' },
            { name: 'VanillaJS', value: 'vanillajs' }
        ],

        options: [
            {
                message: 'JS?',
                name: 'js',

                choices: [
                    { name: 'BabelJS', value: 'babeljs', extra: 'js',
                        exclude: { framework: ['angular2'] }
                    },
                    { name: 'CoffeeScript', value: 'coffeescript', extra: 'coffee',
                        exclude: { framework: ['angular2', 'react'] }
                    },
                    { name: 'TypeScript', value: 'typescript', extra: 'ts',
                        exclude: { framework: ['react'] }
                    }
                ],

                options: [{
                    message: 'Unit test?',
                    name: 'unit-test',
                    parent: 'compiler',

                    choices: [
                        { name: 'No', value: 'no' },
                        { name: 'Mocha', value: 'mocha',
                            exclude: { framework: ['angular2', 'jquery', 'polymer', 'react', 'vanillajs'] }
                        },
                        { name: 'Jasmine', value: 'jasmine',
                            exclude: { framework: ['angular2', 'jquery', 'polymer', 'react', 'vanillajs'] }
                        }
                    ]
                }]
            }, {
                message: 'HTML?',
                name: 'html',
                parent: 'framework',

                choices: [
                    { name: 'Jade', value: 'jade' },
                    { name: 'HTML', value: 'html' }
                ]
            }, {
                message: 'CSS?',
                name: 'css',

                choices: [
                    { name: 'SaSS', value: 'sass', extra: 'sass' },
                    { name: 'ScSS', value: 'scss', extra: 'scss' },
                    { name: 'Less', value: 'less', extra: 'less' },
                    { name: 'Stylus', value: 'stylus', extra: 'styl' },
                    { name: 'CSS', value: 'css' }
                ]
            }
        ]
    }
]