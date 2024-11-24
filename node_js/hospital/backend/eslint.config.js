import js from '@eslint/js';
import globals from 'globals';

export default [
	{ ignores: ['dist', 'node_modules'] },
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: { ...globals.node },
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: [],
		rules: {
			...js.configs.recommended.rules,
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-unused-vars': 'warn',
			'no-mixed-spaces-and-tabs': 'error',
		},
	},
];
