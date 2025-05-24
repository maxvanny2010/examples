import { combineReducers, createStore } from '../../node_modules/redux/es/redux.mjs';
import { productsReducer } from './productsReducer.js';

export const store = createStore(
	combineReducers({
		products: productsReducer,
	}),
);
