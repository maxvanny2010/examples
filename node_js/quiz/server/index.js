const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const cors = require('cors');
const { URL, PAGE } = require('./contants/');
const {
	addQuestion,
	updateQuestion,
	getTest,
	addAnswer,
	removeQuestion,
	removeAnswer,
} = require('./test.controller');
const app = express();

let port = process.env.PORT || 3000;
app.use(cors({
	origin: URL,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`/${PAGE.TESTS}`, async (req, res) => {
	res.json({
		test: await getTest(),
	});
});

app.get(`/${PAGE.NEW}`, async (req, res) => {
	try {
		const test = await addQuestion();
		console.log('test', test);
		res.json({ test: test });
	} catch (err) {
		console.error(`Creation error ${err}`);
		res.status(500).send({});
	}
});
app.put(`/${PAGE.NEW}`, async (req, res) => {
	try {
		const test = await updateQuestion(req.body.id, req.body.question);
		console.log('test', test);
		res.json({ test: test });
	} catch (err) {
		console.error(`Creation error ${err}`);
		res.status(500).send({});
	}
});

app.patch(`/${PAGE.EDIT}`, async (req, res) => {
	try {
		const test = await addAnswer(req.body.id);
		res.json({ test: test });
	} catch (err) {
		console.error(`Editing error ${err}`);
		res.status(404);
	}
});

app.delete(`/${PAGE.EDIT}/:id`, async (req, res) => {
	try {
		const result = await removeQuestion(req.params.id);
		const status = result
			? { status: 200, message: 'Deleted successfully' }
			: { status: 400, message: 'Error deleting question' };
		console.log(result, status);
		res.status(status.status).send({ message: status.message });
	} catch (error) {
		console.error(`Removing error ${error}`);
		res.status(404);
	}

});

app.put(`/${PAGE.EDIT}/:id`, async (req, res) => {
	try {
		const { optionId } = req.body;
		const result = await removeAnswer(req.params.id, optionId);
		if (result) res.json({ test: result });
		else res.status(404).send('Error removed');
	} catch (err) {
		console.error(`Editing error ${err}`);
		res.status(404).send('Error removing answer');
	}
});

mongoose.connect('mongodb+srv://Y1vkkJaVE5U6w3pS:Y1vkkJaVE5U6w3pS@cluster0.voq8c.mongodb.net/tests?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => {
		app.listen(port, () => {
			console.log(chalk.green(`Server listening on port ${port}...`));
		});
	});
