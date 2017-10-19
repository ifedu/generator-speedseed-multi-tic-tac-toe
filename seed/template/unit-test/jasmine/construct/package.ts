export default {
    "devDependencies": {
        "@types/jasmine": "2.6.0",
        "@types/karma": "1.7.1",
        "jasmine": "2.8.0",
        "karma": "1.7.1",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.1",
        "karma-jasmine": "1.1.0",
        "karma-phantomjs-launcher": "1.0.4",
        "phantomjs-prebuilt": "2.1.15"
    },

    "scripts": {
        "test": "gulp test --spec",
        "test.dev": "gulp test.dev --dev --spec"
    }
}
