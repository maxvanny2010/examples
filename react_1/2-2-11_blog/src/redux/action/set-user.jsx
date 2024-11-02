import { ACTION_TYPE } from '../../utils/index.jsx';

export const setUser = (session) => ({
	type: ACTION_TYPE.SET_USER,
	payload: session,
});
