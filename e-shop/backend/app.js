require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const port = 3001;
const app = express();


const path = require('path');

app.use('/access', express.static(path.join(__dirname, 'access')));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/dist')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
	});
} else {
	console.log('Running in development mode');
}


mongoose.connect(process.env.MONGODB_URI)
	.then(() => app.listen(port, () => console.log(`Server started on port ${port}...`)));
