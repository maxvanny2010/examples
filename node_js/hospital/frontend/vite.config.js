import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
	],
	server: {
		port: 4000,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
				configure: (proxy) => {
					proxy.on('proxyReq', (proxyReq) => {
						const targetUrl = `${proxyReq.getHeader('host')}${proxyReq.path}`;
						console.log(`Proxied request to: ${targetUrl}`);
					});
				},
			},
		},
	},
});
