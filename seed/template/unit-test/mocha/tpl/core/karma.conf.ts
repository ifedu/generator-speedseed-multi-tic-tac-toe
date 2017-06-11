import { paths } from 'root/core/seed'

const karmaConf = {
    options: {
        frameworks: [
            'chai',
            'mocha',
        ],

        plugins: [
            'karma-chai',
            'karma-mocha',
        ],
    }
}

const { frameworks, plugins } = paths.test.karma.options

frameworks.push(...karmaConf.options.frameworks)
plugins.push(...karmaConf.options.plugins)

export default paths.test.karma.options
