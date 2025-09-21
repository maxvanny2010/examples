const express = require('express');
const app = express();

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || 'http://date-service:3005';

app.get('/api/date', async (req, res) => {
    try {
        const response = await fetch(DATE_SERVER_HOST);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({error: `Error fetching date: ${err.message}`});
    }
});

// CORS-заголовки, чтобы фронтенд мог делать запросы
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, () => {
    console.log('Result-service started on port 3000!');
});