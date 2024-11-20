import { ACTION_TYPE } from '../../utils/index.jsx';

export const removeAnswer = (id, optionId) => {
	return {
		type: ACTION_TYPE.REMOVE_ANSWER,
		payload: { id, optionId },
	};
};
