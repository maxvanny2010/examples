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
		port: 3000,
		/*proxy: {
			'/api': {
				target: 'http://localhost:3001',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
				configure: (proxy) => {
					proxy.on('proxyReq', (proxyReq) => {
						console.log(`Proxying request to target: ${proxyReq.path}`);
					});
					proxy.on('error', (err) => {
						console.error('Proxy error:', err);
					});
				},
			},
		},
*/
	},

});
