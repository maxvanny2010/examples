const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public/favicon.png'),
					to: path.resolve(__dirname, 'dist'),
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}, {
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader',
					{
						loader: 'postcss-loader', options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							},
						},
					},
					'sass-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.[tj]sx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};