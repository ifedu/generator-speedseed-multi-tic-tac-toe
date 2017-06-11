const debug: string = '--inspect --debug-brk'
const gulp: string = './node_modules/gulp/bin/gulp.js'

export default {
    "description": "<%= project %> with <%= framework %>",
    "name": "<%= project %>",
    "private": true,
    "version": "0.0.0",

    "scripts": {
        "gulp": "gulp",

        "build": "gulp build",
        "start": "gulp build.dev --dev",
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
        "@types/browser-sync": "0.0.36",
        "@types/connect-history-api-fallback": "1.3.0",
        "@types/del": "3.0.0",
        "@types/gulp": "4.0.4",
        "@types/gulp-htmlmin": "1.3.30",
        "@types/gulp-plumber": "0.0.31",
        "@types/gulp-rename": "0.0.32",
        "@types/gulp-uglify": "3.0.1",
        "@types/gulp-watch": "4.1.33",
        "@types/lodash": "4.14.74",
        "@types/node": "8.0.28",
        "@types/run-sequence": "0.0.29",
        "@types/webpack": "3.0.10",

        "browser-sync": "2.18.13",
        "connect-history-api-fallback": "1.3.0",
        "del": "3.0.0",
        "glob-watcher": "4.0.0",

        "gulp": "3.9.1",
        "gulp-changed": "3.1.0",
        "gulp-cssmin": "0.2.0",
        "gulp-data": "1.2.1",
        "gulp-filter": "5.0.1",
        "gulp-htmlmin": "3.0.0",
        "gulp-if": "2.0.2",
        "gulp-minify-inline": "1.0.0",
        "gulp-modify-file": "1.0.0",
        "gulp-plumber": "1.1.0",
        "gulp-rename": "1.2.2",
        "gulp-size": "2.1.0",
        "gulp-uglify": "3.0.0",
        "gulp-useref": "3.1.2",
        "gulp-util": "3.0.8",
        "gulp-watch": "4.3.11",

        "http-proxy-middleware": "0.17.4",
        "lodash": "4.17.4",
        "run-sequence": "2.1.0",
        "ts-loader": "2.3.7",
        "ts-node": "3.3.0",
        "tsconfig-paths": "2.3.0",
        "tslint": "5.7.0",
        "typescript": "2.5.2",

        "webpack": "3.6.0",
    },

    "engines" : {
        "node" : ">=6.0.0",
    }
}
