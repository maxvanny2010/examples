import { deleteAnswer } from '../api/index.jsx';

export const removeQuestionAnswer = async (id, optionId) => {
	try {
		const result = await deleteAnswer(id, optionId);
		return {
			error: null,
			res: result.test,
		};
	} catch (errorTest) {
		return {
			error: errorTest,
			res: null,
		};
	}
};
