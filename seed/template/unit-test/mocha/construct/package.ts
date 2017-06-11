export default {
    "devDependencies": {
        "@types/chai": "4.0.4",
        "@types/mocha": "2.2.43",
        "@types/karma": "0.13.36",
        "chai": "4.1.2",
        "karma": "1.7.1",
        "karma-chai": "0.1.0",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.1",
        "karma-mocha": "1.3.0",
        "karma-phantomjs-launcher": "1.0.4",
        "mocha": "3.5.3",
        "phantomjs-prebuilt": "2.1.15"
    },

    "scripts": {
        "test": "gulp test --spec",
        "test.dev": "gulp test.dev --dev --spec"
    }
}
