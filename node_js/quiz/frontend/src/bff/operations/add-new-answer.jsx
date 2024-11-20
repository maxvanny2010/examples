import { addAnswer } from '../api/index.jsx';

export const addNewAnswer = async (id) => {
	try {
		const result = await addAnswer(id);
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
