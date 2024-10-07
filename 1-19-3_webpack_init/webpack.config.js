const {resolve} = require('path');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'index.js'),
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
        clean: true
    },

}