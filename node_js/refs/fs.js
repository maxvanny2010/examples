const fs = require('fs/promises');
const path = require('path');
const fsSync = require('fs');

const base = path.join(__dirname, 'tmp');

const getContent = () => `${process.argv[2] + '\n' ?? ''}`;

async function start() {
	try {
		// fsSync.writeSync
		if (!fsSync.existsSync(base)) {
			await fs.mkdir(base);
			console.log('Creating directory');
		}
		await fs.appendFile(path.join(base, 'log.txt'), getContent());
		const data = await fs.readFile(path.join(base, 'log.txt'), { encoding: 'utf8' });
		console.log(data);
	} catch (err) {
		console.log('error: ' + err);
	}
}

await start();