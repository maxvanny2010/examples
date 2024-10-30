import { TYPE } from '../constants/TYPE.jsx';

export const startLoading = () => ({
	type: TYPE.START_LOADING,
});
export const finishLoading = () => ({
	type: TYPE.FINISH_LOADING,
});
export const clearInput = () => ({
	type: TYPE.CLEAR_INPUT,
});
