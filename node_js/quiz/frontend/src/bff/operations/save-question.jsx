import { addQuestion } from '../api/index.jsx';

export const saveQuestion = async (id, question) => {
	try {
		const result = await addQuestion(id, question);
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
