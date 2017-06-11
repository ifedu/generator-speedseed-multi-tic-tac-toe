import { Helper } from 'speedseed'

const { setOptions: set } = Helper

export const options: any = [
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
        set('BabelJS (JS)', 'babeljs', 'js', { framework: ['angular2'] }),
        set('CoffeeScript', 'coffeescript', 'coffee', { framework: ['angularjs', 'angular2', 'jquery', 'polymer', 'react'] }),
        set('TypeScript', 'typescript', 'ts', { framework: ['react'] })
    ],
},
{
    message: 'HTML?',
    name: 'html',

    choices: [
        set('Pug (Jade)', 'pug', 'pug', { framework: ['react'] }),
        set('HTML', 'html')
    ]
},
{
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass', 'sass'),
        set('ScSS', 'scss', 'scss'),
        set('Less', 'less', 'less'),
        set('Stylus', 'stylus', 'styl'),
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
        set('Redux', 'redux', undefined, { framework: ['angularjs', 'angular2', 'jquery', 'polymer', 'vanillajs'] })
    ]
},
]
