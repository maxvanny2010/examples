import express from 'express';
import { readFile } from 'fs/promises';
import { App } from './App';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
app.get('/', async (req, res) => {
	const template = await readFile('./index.html', 'utf8');
	const html = renderToString(<App />);

	res.send(template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
});
app.use(express.static('dist'/* {
	maxAge: '1y',
	immutable: true,
}*/));

app.listen(3000, () => console.log('Server started on port 3000'));