import { deleteQuestion } from '../api/index.jsx';

export const removeQuestionTest = async (id) => {
	try {
		const result = await deleteQuestion(id);
		return {
			error: null,
			res: !!result,
		};
	} catch (errorTest) {
		return {
			error: errorTest,
			res: null,
		};
	}
};
