import { mergeWith } from 'lodash'

import { core, paths } from 'root/core/seed'

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

mergeWith(karmaConf.options, paths.test.karma.options, core.concatArr)

export default karmaConf.options
