import { AppReducer } from './appReducer.jsx';

const createStore = (reducer) => {
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
				if (index > -1) {
					listeners.splice(index, 1);
				}
			};
		},
	};
};
export const store = createStore(AppReducer);
store.dispatch({});
