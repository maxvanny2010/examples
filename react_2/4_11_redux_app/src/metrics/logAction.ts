import { UnknownAction } from 'redux';

export function logAction(action: UnknownAction) {
	console.log(action.type);
}
