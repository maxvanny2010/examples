import { ACTION_TYPE } from '../../utils';

export const openModal = (payload) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload,
});
