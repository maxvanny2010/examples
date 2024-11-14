const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');

const BD_URL = path.join(__dirname, 'db.json');

async function addNote(title) {
	const notes = await getNotes();
	const note = {
		title,
		id: Date.now().toString()
	}
	notes.push(note)
	try {
		await fs.writeFile(BD_URL, JSON.stringify(notes, null, 2));
		console.log(chalk.bgGreen('Note added successfully.'));
		return true;
	} catch (err) {
		console.log(chalk.bgRedBright('Failed to add note.'));
		return false;
	}
}

async function getNotes() {
	const notes = await fs.readFile(BD_URL, {encoding: 'utf-8'})
	return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
	const notes = await getNotes()
	console.log(chalk.bgBlue('Notes list:'))
	notes.forEach(note => {
		console.log(chalk.blue(note.title))
	})
}

async function removeNote(id) {
	const notes = await getNotes()
	const index = notes.findIndex(note => note.id === id)
	if (index > -1) {
		notes.splice(index, 1)
		await fs.writeFile(BD_URL, JSON.stringify(notes, null, 2))
		console.log(chalk.bgGreenBright('Note deleted successfully.'))
		return true
	} else {
		console.log(chalk.bgRedBright('Note not found.'))
		return false
	}
}

async function editNote(id, title) {
	const notes = await getNotes()
	const index = notes.findIndex(note => note.id === id)
	if (index > -1) {
		notes[index].title = title
		await fs.writeFile(BD_URL, JSON.stringify(notes, null, 2))
		console.log(chalk.bgGreenBright('Note edited successfully.'))
		return notes[index].title
	} else {
		console.log(chalk.bgRedBright('Note not found.'));
		return ''
	}
}

module.exports = {
	addNote, getNotes, editNote, removeNote
}