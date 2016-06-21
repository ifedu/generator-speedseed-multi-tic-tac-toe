module.exports = function () {
    const app = './app'
    const build = './-build'
    const dist = './-dist'
    const reports = './-reports'

    const assets = 'assets'
    const components = 'components'
    const js = 'js'
    const vendor = 'vendor'

    const coreConfig = {
        app: {
            copy: {
                assets: `${app}/${assets}`,
                vendor: `${app}/-${vendor}`
            },

            dir: app
        },

        build: {
            copy: {
                assets: `${build}/${assets}`,
                vendor: `${build}/${vendor}`
            },

            dir: build,
            port: 8001
        },

        dist: {
            copy: {
                assets: `${dist}/${assets}`,
                vendor: `${dist}/${vendor}`
            },

            dir: dist,
            index: `${dist}/index.html`,
            jsAll: `${dist}/${js}/all.js`,
            port: 8002,

            vulcanize: {
                dir: `${dist}/${components}`,
                name: 'main.html'
            }
        },

        indent: {
            dest: app,
            spacesBefore: 2,
            spacesAfter: 4,

            src: [
                `${app}/**/*`,
                `!${app}/${assets}/**/*`,
                `!${app}/-${vendor}/**/*`
            ]
        },

        reports: {
            dir: reports,
            plato: {
                dir: `${reports}/plato`,
                files: [
                    `${build}/**/${components}/**/*.js`,
                    `${build}/**/${js}/**/*.js`
                ],
                port: 8003
            },
        },

        tmp: {
            dir: './-tmp'
        },

        server: {
            auth: '/auth',
            request: '/api',
            route: 'http://localhost',
            port: 8080,
            portReload: 35729
        },

        test: {
            exclude: [
                `${app}/**/_**/**/*.js`,
                `${app}/**/_*.js`,
                `${build}/**/_**/**/*.js`,
                `${build}/**/_*.js`
            ],

            files: [
                `${build}/**/*.js`
            ],

            preprocessors: {
                [`${app}/**/-*.test.js`]: []
            }
        }
    }

    const extend = require('extend')
    const fs = require('fs')

    const file = (fs.existsSync('./.core-config.json') === true)
        ? JSON.parse(fs.readFileSync('./.core-config.json', 'utf8'))
        : {}

    extend(
        true,
        coreConfig,
        file
    )

    fs.writeFileSync('.core-config.json', JSON.stringify(coreConfig, null, 2))
}