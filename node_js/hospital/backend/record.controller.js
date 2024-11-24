const chalk = require('chalk');
const Record = require('./models/record');

async function addRecord(record) {
	const recordData = {
		date: record.date,
		username: record.username,
		phone: record.phone,
	};

	if (record.question) {
		recordData.question = record.question;
	}
	console.log(`${chalk.greenBright('Record:')}was added!`);
	const newRecord = await Record.create(recordData);
	if (newRecord) console.log(`${chalk.greenBright('Record:')}was added!`);
	else throw new Error('Error:  mistake during a recording');
	return newRecord;
}

async function getRecords(req, res) {
	const { page, limit, sort = 'asc', field = '_id', search = '' } = req.query;
	const parsedPage = parseInt(page, 10);
	const parsedLimit = parseInt(limit, 10);
	const sortDirection = sort === 'desc' ? -1 : 1;

	if (parsedPage <= 0 || parsedLimit <= 0) {
		return res.status(400).json({ error: 'Invalid page or limit' });
	}
	const skip = (parsedPage - 1) * parsedLimit;
	const query = {};
	if (search) query[field] = { $regex: search, $options: 'i' };
	const records =
		await getRecord(query, { [field]: sortDirection }, skip, parsedLimit);
	const totalRecords = await Record.countDocuments(query);
	const totalPages = Math.ceil(totalRecords / parsedLimit);
	return {
		records,
		page: parsedPage,
		totalPages,
		totalRecords,
	};
}

async function getRecord(query, direction, skip, limit) {
	return Record.find(query)
		.sort(direction)
		.skip(skip)
		.limit(limit);
}

module.exports = { addRecord, getRecords };
