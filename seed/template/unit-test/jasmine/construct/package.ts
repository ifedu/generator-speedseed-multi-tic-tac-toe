export default {
    "devDependencies": {
        "@types/jasmine": "2.8.5",
        "@types/karma": "1.7.3",
        "jasmine": "2.9.0",
        "karma": "2.0.0",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.1",
        "karma-jasmine": "1.1.1",
        "karma-phantomjs-launcher": "1.0.4",
        "phantomjs-prebuilt": "2.1.16",
    },

    "scripts": {
        "test": "gulp test --spec",
        "test.dev": "gulp test.dev --dev --spec"
    }
}
