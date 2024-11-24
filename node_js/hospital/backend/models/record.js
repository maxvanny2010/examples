const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
	date: {
		type: String,
		required: true,
		maxlength: [19, 'Max 19 characters only'],
		minlength: [19, 'Min 19 characters only'],
		validate: {
			validator: function(value) {
				return /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(value);
			},
			message: 'Invalid date',
		},
	},
	username: {
		type: String,
		required: true,
		maxlength: [15, 'Max 15 characters only'],
		minlength: [9, 'Min 9 characters only'],
		validate: {
			validator: function(value) {
				return /^[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/.test(value);
			},
			message: 'Username must contain only letters',
		},
	},
	phone: {
		type: String,
		required: true,
		maxlength: [13, 'Max 13 numbers only'],
		minlength: [4, 'Min 4 numbers only'],
		validate: {
			validator: function(value) {
				return /^\d+$/.test(value);
			},
			message: 'Phone must contain only numbers',
		},
	},
	question: {
		type: String,
		maxlength: [100, 'Max 100 characters only'],
	},
});

const Record = mongoose.model('Records', RecordSchema);
module.exports = Record;
