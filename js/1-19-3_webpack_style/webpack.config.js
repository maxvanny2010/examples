const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'index.js'),
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
        }),
    ],
    devServer: {
        static: resolve(__dirname, 'dist'),
        port: 8080,
        open: true
    },
    module: {
        rules: [
            {
                test: /.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
}