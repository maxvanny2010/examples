import { ScoreReducer } from './reducers/ScoreReducer.jsx';
import { FieldsReducer } from './reducers/FieldsReducer.jsx';
import { PlayerReducer } from './reducers/PlayerReducer.jsx';
import { IsDrawReducer } from './reducers/isDrawReducer.jsx';
import { IsGameEndReducer } from './reducers/IsGameEndReducer.jsx';

export const createStore = (reducer) => {
	let state;
	const listeners = [];
	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
			console.log(state);
		},

		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				const index = listeners.indexOf(listener);
				listeners.splice(index, 1);
			};
		},
	};
};
export const storeFields = createStore(FieldsReducer);
storeFields.dispatch({});
export const storePlayer = createStore(PlayerReducer);
storePlayer.dispatch({});
export const storeIsDraw = createStore(IsDrawReducer);
storeIsDraw.dispatch({});
export const storeIsGameEnd = createStore(IsGameEndReducer);
storeIsGameEnd.dispatch({});
export const storeScore = createStore(ScoreReducer);
storeScore.dispatch({});
