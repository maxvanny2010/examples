import { combineReducers, createStore } from 'redux';
import { productsReducer } from './productsReducer.js';

export const store = createStore(
	combineReducers({
		products: productsReducer,
	}),
);
