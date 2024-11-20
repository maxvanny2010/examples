const Test = require('./models/Test');
const chalk = require('chalk');

async function addQuestion() {
	try {
		const createdTest = await Test.create({});
		getColorStringSuccess('Question', 'created');
		return createdTest;
	} catch (error) {
		getColorStringError('Question', 'creating', '', error);
	}
}

async function getTest() {
	return Test.find();
}

async function removeQuestion(id) {
	try {
		const { deletedCount } = await Test.deleteOne({ _id: id });
		if (deletedCount) {
			getColorStringSuccess('removed');
		} else getColorStringError('removed', id, 'Not found');
		return !!deletedCount;
	} catch (error) {
		getColorStringError('removed', id, error);
		return false;
	}
}

async function addAnswer(id) {
	const updatedTest = await Test.findByIdAndUpdate(
		id,
		{
			$push: {
				options:
					{
						text: '',
						isCorrect: false,
					},
			},
		},
		{ new: true },
	);
	if (updatedTest) {
		getColorStringSuccess('Answer', 'added', id);
		return await Test.findById(id);
	} else {
		getColorStringError('Answer', 'added', id, 'Answer not found');
	}
}

async function updateQuestion(id, question) {
	try {
		const updatedQuestion = await Test.findByIdAndUpdate(
			id,
			{
				$set: question,
			},
			{ new: true },
		);
		if (updatedQuestion) {
			getColorStringSuccess('Question', 'updated', id);
			return updatedQuestion;
		} else {
			getColorStringError('Question', 'updated', id, 'Question not found');
		}
	} catch (error) {
		getColorStringError('Question', 'updated', id, error.message);
		throw error;
	}
}

async function removeAnswer(id, optionId) {
	const removeAnswer = await Test.updateOne({ _id: id }, {
		$pull: { options: { _id: optionId } },
	});
	if (removeAnswer.modifiedCount > 0) {
		getColorStringSuccess('Answer', `removed ${optionId}`, id);
		return true;
	} else {
		getColorStringError('Answer', `removed ${optionId}`, id, 'Question not found');
		return null;
	}

}

function getColorStringSuccess(element = 'Question', action = '', id = '') {
	console.log(`${element} ${id} ${chalk.bgGreenBright(action)} successfully.`);
}

function getColorStringError(element = 'Question', action = '', id = '', error = '') {
	console.log(`${element} ${id} ${chalk.bgRedBright(action)} failed. error: ${error}`);
}

module.exports = { addQuestion, updateQuestion, getTest, addAnswer, removeAnswer, removeQuestion };
