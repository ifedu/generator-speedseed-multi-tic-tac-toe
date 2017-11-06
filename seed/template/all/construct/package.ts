const debug: string = '--inspect --debug-brk'
const gulp: string = './node_modules/gulp/bin/gulp.js'

export default {
    "description": "<%= project %> with <%= framework %>",
    "name": "<%= project %>",
    "private": true,
    "version": "0.0.0",

    "scripts": {
        "start": "gulp build.dev --dev",

        "preinstall": "yo speedseed:construct",
        "gulp": "gulp",

        "build": "gulp build",
        "build.dev": "gulp build.dev --dev",
        "build.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dev --dev",
        "build.dev.open": "gulp build.dev --dev --open",

        "dist": "gulp build.dist --dist",
        "dist.dev": "gulp build.dist.dev --dev --dist",
        "dist.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dist.dev --dev",
        "dist.dev.open": "gulp build.dist.dev --dev --dist --open",
    },

    "dependencies": {},

    "devDependencies": {
        "@types/browser-sync": "0.0.37",
        "@types/connect-history-api-fallback": "1.3.0",
        "@types/del": "3.0.0",
        "@types/extract-text-webpack-plugin": "3.0.0",
        "@types/gulp": "3.8.34",
        "@types/gulp-htmlmin": "1.3.30",
        "@types/gulp-plumber": "0.0.31",
        "@types/lodash": "4.14.82",
        "@types/node": "8.0.47",
        "@types/run-sequence": "0.0.29",
        "@types/webpack": "3.0.14",

        "browser-sync": "2.18.13",
        "connect-history-api-fallback": "1.4.0",
        "del": "3.0.0",

        "gulp": "3.9.1",
        "gulp-cssmin": "0.2.0",
        "gulp-htmlmin": "3.0.0",
        "gulp-minify-inline": "1.0.0",
        "gulp-modify-file": "1.0.0",
        "gulp-plumber": "1.1.0",

        "http-proxy-middleware": "0.17.4",
        "lodash": "4.17.4",
        "run-sequence": "2.2.0",
        "ts-node": "3.3.0",
        "tsconfig-paths": "2.3.0",
        "tslint": "5.8.0",
        "typescript": "2.6.1",

        "css-loader": "0.28.7",
        "extract-text-webpack-plugin": "3.0.2",
        "html-loader": "0.5.1",
        "modify-file-loader": "1.0.0",
        "pug-html-loader": "1.1.5",
        "raw-loader": "0.5.1",
        "style-loader": "0.19.0",
        "ts-loader": "3.1.1",
        "webpack": "3.8.1",
    },

    "engines" : {
        "node" : ">=6.0.0",
    }
}
