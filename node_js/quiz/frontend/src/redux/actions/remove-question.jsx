import { ACTION_TYPE } from '../../utils/index.jsx';

export const removeQuestion = (id) => {
	return {
		type: ACTION_TYPE.REMOVE_QUESTION,
		payload: { id },
	};
};
