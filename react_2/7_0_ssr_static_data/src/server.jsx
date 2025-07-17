import { readFile } from 'fs/promises';
import { App } from './App';
import React from 'react';
import { renderToString } from 'react-dom/server';
import http from 'http';

http.createServer(async (req, res) => {
	if (req.url === '/bundle.js') {
		const bundle = await readFile('./dist/bundle.js');
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		res.end(bundle);
		return;
	}
	const template = await readFile('./index.html', 'utf8');
	const data = await App.getServerSideProps();
	const html = renderToString(<App data={data} />);

	res.end(template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
}).listen(3000, () => console.log('Server started on port 3000'));