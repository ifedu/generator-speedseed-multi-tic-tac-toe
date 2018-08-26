export default {
    "devDependencies": {
        "@types/chai": "4.1.4",
        "@types/mocha": "5.2.5",
        "@types/karma": "1.7.5",
        "chai": "4.1.2",
        "karma": "3.0.0",
        "karma-chai": "0.1.0",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.2",
        "karma-mocha": "1.3.0",
        "karma-phantomjs-launcher": "1.0.4",
        "mocha": "5.2.0",
        "phantomjs-prebuilt": "2.1.16",
    },

    "scripts": {
        "test": "gulp test --spec",
        "test.dev": "gulp test.dev --dev --spec"
    }
}
