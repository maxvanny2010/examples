const Note = require('./models/note');
const chalk = require('chalk');

async function addNote(title) {
	await Note.create({ title }).then(() => {
		getColorString('created');
	});
}

async function getNotes() {
	return Note.find();
}

async function removeNote(id) {
	await Note.deleteOne({ _id: id }).then(() => {
		getColorString('deleted', id);
	});
}

async function editNote(noteData) {
	await Note.updateOne({ _id: noteData.id }, { title: noteData.title }).then(() => {
		getColorString('edited', noteData.id);
	});
}

function getColorString(action = '', id = '') {
	console.log(`Note ${id} ${chalk.bgGreenBright(action)} successfully.`);
}

module.exports = {
	addNote, getNotes, editNote, removeNote,
};