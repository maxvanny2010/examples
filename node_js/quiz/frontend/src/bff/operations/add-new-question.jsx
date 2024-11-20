import { newQuestion } from '../api/index.jsx';

export const addNewQuestion = async () => {
	try {
		const result = await newQuestion();
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
