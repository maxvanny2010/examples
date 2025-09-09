const express = require('express');
const { default: fetch } = require('node-fetch');
const app = express();
app.get('/', (req, res) => {
	fetch('http://date:3005')
		.then(res => res.json())
		.then(date => res.send(`Hello! Current date: ${date}\n`));
});

app.listen(3000, () => {
	console.log('Server started on port 3000!');
});