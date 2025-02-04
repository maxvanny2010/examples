import js from '@eslint/js';
import globals from 'globals';

export default [
	{
		files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				myCustomGlobal: 'readonly',
			},
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { js: true },
				sourceType: 'module',
			},
		},
		rules: {
			...js.configs.recommended.rules,
		},
	},
];