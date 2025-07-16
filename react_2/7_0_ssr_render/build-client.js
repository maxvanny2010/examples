import esbuild from 'esbuild';
import manifestPlugin from 'esbuild-plugin-manifest';
import fs from 'fs';

/**
 * example Cache.
 * don't use in this app.
 * @returns {Promise<void>}
 */
async function buildClient() {
	const result = await esbuild.build({
		entryPoints: ['src/client.jsx'],
		bundle: true,
		outdir: 'dist',
		entryNames: '[name]-[hash]',// имя с хешем
		plugins: [manifestPlugin()],
		metafile: true,
		jsx: 'automatic',
		format: 'esm',
		write: true,
	});

	// read manifest.json
	const manifest = JSON.parse(fs.readFileSync('dist/manifest.json', 'utf8'));
	const bundleName = manifest['src/client.jsx'];

	// replace в index.template.html
	let template = fs.readFileSync('index.template.html', 'utf8');
	const html = template.replace('BUNDLE_FILE.js', bundleName);
	fs.writeFileSync('dist/ndex.html', html);

	console.log('✅ Client built:', bundleName);
}

buildClient().catch((err) => {
	console.error(err);
	process.exit(1);
});
