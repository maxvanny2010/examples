const express = require('express')
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

app.get('/', async (req, res) => {
	res.render('index', {
		title: 'Express App',
		notes: await getNotes(),//[] No notes
		message: '',
	})
})
app.post('/', async (req, res) => {
	const result = await addNote(req.body.title)
	res.render('index', {
		title: 'Express App',
		notes: await getNotes(),
		message: result ? 'Note has been created' : ''
	})
});

app.delete('/:id', async (req, res) => {
	const result = await removeNote(req.params.id)
	res.render( 'index', {
		title: 'Express App',
		notes: await getNotes(),
		message: result ? 'deleted' : ''
	})
})

app.put('/:id', async (req, res) => {
	const title = await editNote(req.params.id, req.body.title)
	if (title) res.json({message: title,})
	else res.status(404).send('Error editing note')
})

app.listen(port, () => {
	console.log(chalk.green(`Server listening on port ${port}...`));
})