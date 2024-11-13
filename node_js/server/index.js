/* get access to modules*/
require('./module');
/* get access to arguments*/
require('./agrus');
const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, getNotes, printNotes, removeNote } = require('./notes.controller');

const pkg = require('./package.json');

yargs.version(pkg.version);
yargs.command({
	command: 'add',
	describe: 'Add note',
	builder: {
		title: {
			type: 'string',
			description: 'Add title to noe',
			demandOption: true,
		},
	},
	async handler({ title }) {
		await addNote(title);
	},
});
yargs.command({
	command: 'list',
	describe: 'List notes',
	async handler() {
		let notes = await getNotes();
		notes.forEach(note => {
			console.log(chalk.bgGrey(note.id), chalk.blue(note.title));
		});
	},
});
yargs.command({
	command: 'print',
	describe: 'Prints the note',
	async handler() {
		await printNotes();
	},
});
yargs.command({
	command: 'remove',
	describe: 'Remove note by id',
	builder: {
		id: {
			type: 'string',
			describe: 'Id of the note',
			demandOption: true,
		},
	},
	async handler({ id }) {
		await removeNote(id);
	},
});
yargs.parse();

/* path to current folder*/
console.log(__dirname);
/* path to current file*/
console.log(__filename);
/* start ::*/
/* object and function*/
const person = {
	name: 'Maxim',
	age: 25,
};

function getName(person) {
	return person.name;
}

console.log(getName(person));
/* :: end */