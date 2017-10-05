import { Helper } from 'speedseed'

const { setOptions: set } = Helper

export const options: any = [
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
        set('Polymer', 'polymer'),
        set('React', 'react'),
        set('VanillaJS', 'vanillajs')
    ],
},
{
    message: 'JS?',
    name: 'js',

    choices: [
        set('BabelJS (JS)', 'babeljs', { framework: ['angular2'] }),
        set('CoffeeScript', 'coffeescript', { framework: ['angularjs', 'angular2', 'jquery', 'polymer', 'react'] }),
        set('TypeScript', 'typescript', { framework: ['polymer', 'react'] })
    ],
},
{
    message: 'HTML?',
    name: 'html',

    choices: [
        set('Pug (Jade)', 'pug', { framework: ['react'] }),
        set('HTML', 'html')
    ]
},
{
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass'),
        set('ScSS', 'scss'),
        set('Less', 'less'),
        set('Stylus', 'stylus'),
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
        set('Redux', 'redux', { framework: ['angularjs', 'angular2', 'jquery', 'polymer', 'vanillajs'] })
    ]
},
]
