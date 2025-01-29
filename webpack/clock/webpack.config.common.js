import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import ESLintPlugin from 'eslint-webpack-plugin';

export default {
	context: path.resolve(process.cwd(), 'src'),
	entry: './index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(process.cwd(), 'dist'),
		assetModuleFilename: 'assets/[name].[contenthash][ext]',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader',
					{
						loader: 'postcss-loader', options: {
							postcssOptions: {
								plugins: [postcssPresetEnv],
							},
						},
					},
					'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/img/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.(svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/icons/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.(mp3|wav)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/sounds/[name].[contenthash][ext]',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ESLintPlugin({
			extensions: ['js', 'jsx'],
			overrideConfigFile: path.resolve(process.cwd(), 'eslint.config.js'),
			emitWarning: true,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(process.cwd(), 'public/index.html'),
			favicon: path.resolve(process.cwd(), 'public/favicon.ico'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'assets',
					to: 'assets',
				},
				{
					from: 'css',
					to: 'css',
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
};