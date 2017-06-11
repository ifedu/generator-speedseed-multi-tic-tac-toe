import { paths } from 'root/core/seed'

const karmaConf = {
    options: {
        frameworks: [
            'jasmine',
        ],

        plugins: [
            'karma-jasmine',
        ],
    }
}

const { frameworks, plugins } = paths.test.karma.options

frameworks.push(...karmaConf.options.frameworks)
plugins.push(...karmaConf.options.plugins)

export default paths.test.karma.options
