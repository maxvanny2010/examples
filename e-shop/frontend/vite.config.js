import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
		svgr(),
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
		},*/
	},
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/access'),
		},
	},

});
