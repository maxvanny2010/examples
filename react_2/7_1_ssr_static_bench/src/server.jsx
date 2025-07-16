/*import express from 'express';*/
import { readFile } from 'fs/promises';
import { App } from './App';
import React from 'react';
import http from 'http';
import { renderToStaticMarkup } from 'react-dom/server';

/*const app = express();*/
http.createServer(async (req, res) => {
	if (req.url === '/') {
		const template = await readFile('./index.html', 'utf8');
		const html = renderToStaticMarkup(<App />);

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
	} else {
		res.writeHead(404);
		res.end('Not found');
	}
}).listen(3000, () => console.log('Server started on port 3000'));
/*
app.use(express.static('dist'/!* {
	maxAge: '1y',
	immutable: true,
}*!/));

app.listen(3000, () => console.log('Server started on port 3000'));*/
