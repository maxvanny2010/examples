import { combineReducers } from 'redux';
import { logActionMiddleware } from './logActionMiddleware';
import { orderSlice } from './orderReducer';
import { productsSlice } from './productsReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = persistReducer(
	{ key: 'redux', storage: storage, throttle: 100000 },
	combineReducers({
		products: productsSlice.reducer,
		order: orderSlice.reducer,
	}),
);

export const store = configureStore(
	{
		reducer: rootReducer,
		devTools: true,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({ serializableCheck: false }).concat(logActionMiddleware),

	},
);

export const persistor = persistStore(store);

// @ts-ignore
window.persistor = persistor;

export type RootState = ReturnType<typeof rootReducer>;
