module.exports = ($) => {
    const optionsGeneral = {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
    }

    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    file.extendFromUser(optionsGeneral, './.babelrc')

    file.writeFile('.babelrc', optionsGeneral, 4)
}