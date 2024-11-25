const express = require('express');
const chalk = require('chalk');
const path = require('path');
const mongoose = require('mongoose');
const PATH = require('./contants/path/path');
const cookieParser = require('cookie-parser');
const { addRecord, getRecords } = require('./record.controller');
const { addUser, loginUser } = require('./user.controller');
const auth = require('./middlewares/auth');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

function handlerError(err, res, status) {
	if (!res.headersSent) {
		console.log(`${chalk.redBright('error: ')}${err.message}`);
		res.status(status).send({ message: err.message });
	} else {
		console.log(`${chalk.redBright('error already sent: ')}${err.message}`);
	}
}

function incomingRequest(req) {
	console.log(`Request: ${req.method} ${req.protocol}://${req.headers.host}${req.originalUrl}`);
	console.log('body: ', req.body);
}

app.get(`${PATH.USER}`, async (req, res) => {
	try {
		incomingRequest(req);
		const user = await addUser();
		const userResponse = {
			id: user.user._id,
			email: user.user.email,
		};
		res.status(200).json(userResponse);
	} catch (err) {
		handlerError(err, res, 500);
	}
});

app.post(`${PATH.LOGIN}`, async (req, res) => {
	try {
		incomingRequest(req);
		const token = await loginUser(req.body);
		res.cookie('token', token, { httpOnly: true, secure: false });
		res.status(200).json({ token: token, email: req.body.email });
	} catch (err) {
		handlerError(err, res, 403);
	}
});

app.post(`${PATH.RECORDS}`, async (req, res) => {
	try {
		incomingRequest(req);
		const record = await addRecord(req.body);
		res.status(200).json(record);
	} catch (err) {
		handlerError(err, res, 500);
	}
});
/*****************************************************************/
app.use(auth);

app.get(`${PATH.LOGOUT}`, async (req, res) => {
	try {
		incomingRequest(req);
		res.clearCookie('token', { httpOnly: true, secure: false });
		res.status(200).json({ message: 'Logout successful' });
		console.log(`${chalk.greenBright('User: logout ')} successfully.`);
	} catch (err) {
		handlerError(err, res, 401);
	}
});

app.get(`${PATH.RECORDS}`, async (req, res) => {
	try {
		incomingRequest(req);
		const records = await getRecords(req, res);
		res.status(200).json(records);
	} catch (err) {
		handlerError(err, res, 500);
	}
});
mongoose.connect(
	'mongodb+srv://Y1vkkJaVE5U6w3pS:Y1vkkJaVE5U6w3pS@cluster0.voq8c.mongodb.net/record?retryWrites=true&w=majority&appName=Cluster0',
).then(() => {
	app.listen(port, () => {
		console.log(chalk.green(`Server has been started on port ${port}...`));
	});
});
