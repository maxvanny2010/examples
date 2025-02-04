import { merge } from 'webpack-merge';
import path from 'path';
import commonConfig from './webpack.config.common.js';

export default merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.resolve(process.cwd(), 'dist'),
		},
		compress: true,
		port: 3000,
		hot: true,
		open: true,
	},
});