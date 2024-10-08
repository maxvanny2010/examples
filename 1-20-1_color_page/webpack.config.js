const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, {mode}) => ({
    mode,
    entry: resolve(__dirname, 'index.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        static: resolve(__dirname, 'build'),
        port: 8080,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    }
})
