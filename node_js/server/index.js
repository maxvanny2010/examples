const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const { addNote } = require('./notes.controller');

const port = 3000;

const basePath = path.join(__dirname, 'pages');

const server = http.createServer(async (req, res) => {
	/*console.log('Server! Request object: ', req.method);
   console.log('Server! Request object: ', req.url);
   res.end('Hello from Server!');*/
	if (req.method === 'GET') {
		const content = await fs.readFile(path.join(basePath, 'index.html'));
		// res.setHeader('Content-Type', 'text/html');
		res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		res.end(content);
	}
	if (req.method === 'POST') {
		const body = [];
		res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		req.on('data', (data) => {
			//  console.log('data',data) data-buffer
			body.push(Buffer.from(data));
		});
		req.on('end', () => {
			const title = body.toString().split('=')[1]
				.replaceAll('+', ' ');
			addNote(title);
			res.end(`Title: ${title}`);
		});
	}
});
server.listen(port, () => {
	console.log(chalk.green(`Server listening on port ${port}...`));
})