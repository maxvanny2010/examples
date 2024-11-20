const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		default: () => new mongoose.Types.ObjectId(),
	},
	text: { type: String, default: '' },
	isCorrect: { type: Boolean, default: false },
});
const TestSchema = mongoose.Schema({
	question: { type: String, default: '' },
	answer: { type: String, default: '' },
	options: {
		type: [OptionSchema],
		default: () => [
			{ text: '', isCorrect: false },
			{ text: '', isCorrect: false },
			{ text: '', isCorrect: false },
		],
	},
});
TestSchema.set('toJSON', {
	transform: (doc, ret) => {
		return {
			_id: ret._id,
			question: ret.question,
			answer: ret.answer,
			options: ret.options,
			__v: ret.__v,
		};
	},
});
const Test = mongoose.model('Test', TestSchema);
module.exports = Test;
