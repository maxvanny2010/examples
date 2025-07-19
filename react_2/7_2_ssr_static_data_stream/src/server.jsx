import { readFile } from 'fs/promises';
import { App } from './App';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import http from 'http';

http.createServer(async (req, res) => {
	if (req.url === '/bundle.js') {
		const bundle = await readFile('./dist/bundle.js');
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		res.end(bundle);
		return;
	}

	const template = await readFile('./index.html', 'utf8');
	const [start, end] = template.split('<div id="root"></div>');

	// создаём данные только на сервере
	const serverData = [
		{ name: 'TypeScript', mark: new Date().getSeconds() },
		{ name: 'JavaScript', mark: '4.8' },
		{ name: 'Java', mark: '5.0' },
	];

	let didError = false;

	const stream = renderToPipeableStream(
		<App initialData={serverData} />,
		{
			bootstrapScripts: ['bundle.js'],
			onShellReady() {
				res.statusCode = didError ? 500 : 200;
				res.setHeader('Content-Type', 'text/html; charset=UTF-8');
				res.write(
					start +
					'<div id="root">',
				);
				stream.pipe(res, { end: false });
			},
			onAllReady() {
				// 👇 передаём данные внутрь window.__DATA__
				const serialized = JSON.stringify(serverData).replace(/</g, '\\u003c');
				res.write(`</div><script>window.__DATA__ = ${serialized}</script>` + end);
				res.end();
			},
			onShellError() {
				res.statusCode = 500;
				res.setHeader('Content-Type', 'text/html; charset=UTF-8');
				res.end('<h1>Something went wrong</h1>');
			},
			onError(err) {
				didError = true;
				console.error(err);
			},
		},
	);
}).listen(3000, () => console.log('Server started on port 3000'));
