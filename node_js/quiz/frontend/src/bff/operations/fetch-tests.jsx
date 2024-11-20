import { getTest } from '../api/index.jsx';

export const fetchTest = async () => {
	let test = [];
	let error;
	try {
		test = await getTest();
	} catch (errorTest) {
		error = errorTest;
	}
	if (error) {
		return {
			error,
			res: null,
		};
	}
	return {
		error: null,
		res: test,
	};
};
