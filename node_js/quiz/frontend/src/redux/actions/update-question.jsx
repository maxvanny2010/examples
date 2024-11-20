import { ACTION_TYPE } from '../../utils/index.jsx';

export const updateQuestion = (question) => {
	return {
		type: ACTION_TYPE.UPDATE_QUESTION,
		payload: question,
	};
};
