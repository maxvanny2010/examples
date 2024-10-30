import { TYPE } from '../constants/TYPE.jsx';

export const messageErrorDuplicate = () => ({
	type: TYPE.DUPLICATE,
	payload: 'Task already exists',
});
export const messageErrorNoDuplicates = () => ({
	type: TYPE.NO_ERROR,
	payload: '',
});
