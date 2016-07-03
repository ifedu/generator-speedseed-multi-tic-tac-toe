const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = speedseed.Config(require('./config.js'))