const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');

const DB_URL = path.join(__dirname, 'db.json');

async function addNote(title) {
	// const notes = require(BD_URL)
	/* get Buffer */
	/* const buffer = fs.readFile(BD_URL)
	 const notes = Buffer.from(buffer).toString('utf8'); */
	/*const notes = fs.readFile(BD_URL, {encoding: 'utf-8'})
	console.log(JSON.stringify(notes));*/
	console.log(Date.now().toString());
	const notes = await getNotes();
	const note = {
		title,
		id: Date.now().toString(),
	};
	notes.push(note);
	await fs.writeFile(DB_URL, JSON.stringify(notes, null, 2));
	console.log(chalk.bgGreen('Note added successfully.'));

}

async function getNotes() {
	const notes = await fs.readFile(DB_URL, { encoding: 'utf-8' });
	// console.log(typeof notes)
	// console.log(typeof JSON.parse(notes))
	return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
	const notes = await getNotes();
	console.log(chalk.bgBlue('Notes list'));
	notes.forEach(note => {
		console.log(chalk.blue(note.title));
	});
}

async function removeNote(id) {
	const notes = await getNotes();
	const index = notes.findIndex(note => id === note.id);
	if (index !== -1) {
		notes.splice(index, 1);
		await fs.writeFile(DB_URL, JSON.stringify(notes, null, 2));
		console.log(chalk.bgGreenBright('Note removed successfully.'));
	} else console.log(chalk.bgRedBright('Note not found.'));
}

module.exports = {
	addNote, getNotes, removeNote, printNotes,
};