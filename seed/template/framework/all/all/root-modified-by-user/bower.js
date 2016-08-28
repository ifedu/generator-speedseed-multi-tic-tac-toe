module.exports = ($) => {
    const optionsGeneral = {
        name: `${$.general.project} with ${$.user.template}`,
        private: true,

        dependencies: {}
    }

    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    file.extendFromUser(optionsGeneral, './bower.json')
    file.extendFromOptions($, optionsGeneral.dependencies, {
        framework: {
            polymer: {
                'Polymer': '^1.6.0'
            }
        }
    })

    file.writeFile('bower.json', optionsGeneral, 2)
}