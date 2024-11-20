import { ACTION_TYPE } from '../../utils/index.jsx';

export const closeModal = () => {
	return { type: ACTION_TYPE.CLOSE_MODAL };
};
