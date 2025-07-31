import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		screens: {
			sm: '400px',
			md: '768px',
			lg: '1200px',
			xl: '1440px',
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"San Francisco"',
				'"Segoe UI"',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'"Open Sans"',
				'"Helvetica Neue"',
				'sans-serif',
			],
			mono: [
				'"SFMono-Regular"',
				'Consolas',
				'"Liberation Mono"',
				'Menlo',
				'monospace',
			],
		},
	},
	plugins: [],
};

export default config;
