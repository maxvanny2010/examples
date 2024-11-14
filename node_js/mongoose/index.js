const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const path = require('path')
const {addNote, getNotes, removeNote, editNote} = require('./notes.controller')

let port = 3000;

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'pages')
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

async function getOptions(message = '', error = false) {
	return {
		title: 'Express App',
		notes: await getNotes(),
		message: message,
		error: error
	};
}

app.get('/', async (req, res) => {
	res.render('index', await getOptions())
})
app.post('/', async (req, res) => {
	try {
		await addNote(req.body.title);
		res.render('index', await getOptions('Note has been created', false));
	} catch (error) {
		console.error(`Creation error ${error}`)
		res.render('index', await getOptions('', true));
	}
});

app.delete('/:id', async (req, res) => {
	try {
		await removeNote(req.params.id);
		res.render('index', await getOptions('deleted', false));
	} catch (error) {
		console.error(`Error deleting note: ${error}`);
		res.render('index', await getOptions('', true));
	}
})

app.put('/:id', async (req, res) => {
	try {
		await editNote({id: req.params.id, title: req.body.title})
		res.json({message: req.body.title,})
	} catch (error) {
		console.error(`Creation error ${error}`);
		res.status(404).send('Error editing note')
	}
})

mongoose.connect('mongodb+srv://Mongodb1974:Mongodb1974@cluster0.voq8c.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => {
		app.listen(port, () => {
			console.log(chalk.green(`Server listening on port ${port}...`));
		})
	})
