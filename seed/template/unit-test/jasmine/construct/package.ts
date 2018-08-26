export default {
    "devDependencies": {
        "@types/jasmine": "2.8.8",
        "@types/karma": "1.7.5",
        "jasmine": "3.2.0",
        "karma": "3.0.0",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.2",
        "karma-jasmine": "1.1.2",
        "karma-phantomjs-launcher": "1.0.4",
        "phantomjs-prebuilt": "2.1.16",
    },

    "scripts": {
        "test": "gulp test --spec",
        "test.dev": "gulp test --dev --spec"
    }
}
