const debug: string = '--inspect --debug-brk'
const gulp: string = './node_modules/gulp/bin/gulp.js'

export default {
    "description": "<%= project %> with <%= framework %>",
    "name": "<%= project %>",
    "private": true,
    "version": "0.0.0",

    "scripts": {
        "i": "npm install",
        "preinstall": "yo speedseed:construct",
        "update": "yo speedseed --update=true && npm run i",
        "start": "gulp build.dev --dev",

        "build": "gulp build",
        "build.dev": "gulp build.dev --dev",
        "build.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dev --dev",
        "build.dev.open": "gulp build.dev --dev --open",

        "dist": "gulp build.dist --dist",
        "dist.dev": "gulp build.dist.dev --dev --dist",
        "dist.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dist.dev --dev",
        "dist.dev.open": "gulp build.dist.dev --dev --dist --open",

        "gulp": "gulp",
    },

    "dependencies": {},

    "devDependencies": {
        "@types/browser-sync": "0.0.38",
        "@types/connect-history-api-fallback": "1.3.1",
        "@types/del": "3.0.0",
        "@types/extract-text-webpack-plugin": "3.0.0",
        "@types/gulp": "4.0.5",
        "@types/gulp-htmlmin": "1.3.31",
        "@types/gulp-plumber": "0.0.32",
        "@types/lodash": "4.14.96",
        "@types/node": "9.3.0",
        "@types/run-sequence": "0.0.30",
        "@types/webpack": "3.8.3",

        "browser-sync": "2.23.6",
        "connect-history-api-fallback": "1.5.0",
        "del": "3.0.0",

        "gulp": "3.9.1",
        "gulp-cssmin": "0.2.0",
        "gulp-htmlmin": "4.0.0",
        "gulp-minify-inline": "1.0.0",
        "gulp-modify-file": "1.0.0",
        "gulp-plumber": "1.2.0",

        "http-proxy-middleware": "0.17.4",
        "lodash": "4.17.4",
        "run-sequence": "2.2.1",
        "ts-node": "4.1.0",
        "tsconfig-paths": "3.1.1",
        "tslint": "5.9.1",
        "typescript": "2.6.2",

        "css-loader": "0.28.9",
        "extract-text-webpack-plugin": "3.0.2",
        "html-loader": "0.5.5",
        "modify-file-loader": "1.0.0",
        "pug-html-loader": "1.1.5",
        "raw-loader": "0.5.1",
        "style-loader": "0.19.1",
        "ts-loader": "3.3.1",
        "webpack": "3.10.0"
    },

    "engines" : {
        "node" : ">=6.0.0",
    }
}
