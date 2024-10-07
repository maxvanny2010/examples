import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import {babel} from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: "./index.js",
    output: {
        file: "./dist/bundle.js",
        format: "cjs",
        assetFileNames: '[name][extname]'
    },

    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env'],
        }),
        styles({
            mode: 'extract',
            minimize: true,
        }),
        image(),
        serve('dist'),
        livereload(),
    ],
};