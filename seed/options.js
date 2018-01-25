function set(name, value, exclude) {
    return { name, value, exclude }
}

module.exports = [
{
    message: 'Electron?',
    name: 'electron',

    choices: [
        set('No', 'no'),
        set('Yes', 'yes'),
    ],
},
{
    message: 'Library / Framework?',
    name: 'framework',

    choices: [
        set('AngularJS', 'angularjs'),
        set('Angular2', 'angular2'),
        set('jQuery', 'jquery'),
        set('Polymer2', 'polymer2'),
        set('Polymer3', 'polymer'),
        set('React', 'react'),
        set('VanillaJS', 'vanillajs'),
        set('WebComponents', 'webcomponents')
    ],
},
{
    message: 'JS?',
    name: 'js',

    choices: [
        set('BabelJS (JS)', 'babeljs', { framework: ['angular2'] }),
        set('CoffeeScript', 'coffeescript', { framework: ['angularjs', 'angular2', 'jquery', 'polymer', 'polymer2', 'react', 'webcomponents'] }),
        set('TypeScript', 'typescript', { framework: ['polymer', 'polymer2', 'react', 'webcomponents'] })
    ],
},
{
    message: 'HTML?',
    name: 'html',

    choices: [
        set('Pug (Jade)', 'pug', { framework: ['polymer', 'polymer2', 'react', 'webcomponents'] }),
        set('HTML', 'html')
    ]
},
{
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass', { framework: ['polymer2'] }),
        set('ScSS', 'scss', { framework: ['polymer2'] }),
        set('Less', 'less', { framework: ['polymer2'] }),
        set('Stylus', 'stylus', { framework: ['polymer2'] }),
        set('CSS', 'css')
    ]
},
{
    message: 'Unit test?',
    name: 'unit-test',

    choices: [
        set('No', 'no'),
        set('Mocha', 'mocha'),
        set('Jasmine', 'jasmine')
    ]
},
{
    message: 'Redux?',
    name: 'redux',

    choices: [
        set('No', 'no'),
        set('Redux', 'redux', { framework: ['angularjs', 'angular2', 'jquery', 'polymer', 'polymer2', 'vanillajs', 'webcomponents'] })
    ]
},
]
