module.exports = ($) => {
    const optionsGeneral = {
        directory: 'app/-vendor'
    }

    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    file.extendFromUser(optionsGeneral, './.bowerrc')

    file.writeFile('.bowerrc', optionsGeneral, 4)
}