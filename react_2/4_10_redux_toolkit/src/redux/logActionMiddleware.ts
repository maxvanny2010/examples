import { Middleware, UnknownAction } from 'redux';
import { logAction } from '../metrics/logAction';
import { RootState } from './store';

export const logActionMiddleware: Middleware<{}, RootState> =
	() => next => (action: unknown) => {
		logAction(action as UnknownAction);
		return next(action);
	};
