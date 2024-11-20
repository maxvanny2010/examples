import { ACTION_TYPE } from '../../utils/index.jsx';

export const openModal = (payload) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload,
});
