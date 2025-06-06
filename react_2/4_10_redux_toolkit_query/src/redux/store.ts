import { combineReducers } from 'redux';
import { logActionMiddleware } from './logActionMiddleware';
import { orderApiSlice } from './orderReducer';
import { productsApiSlice, productsSlice } from './productsReducer';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { productsApisSlice } from './examples/productsApisSlice';

const rootReducer = persistReducer(
	{ key: 'redux', storage: storage, throttle: 100000 },
	combineReducers({
		quantities: productsSlice.reducer,
		[orderApiSlice.reducerPath]: orderApiSlice.reducer,
		[productsApiSlice.reducerPath]: productsApiSlice.reducer,
		[productsApisSlice.reducerPath]: productsApisSlice.reducer,
	}),
);

export const store = configureStore(
	{
		reducer: rootReducer,
		devTools: true,
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
				},
			}).concat([
				orderApiSlice.middleware,
				productsApiSlice.middleware,
				logActionMiddleware,
			]);
		},
	},
);

export const persistor = persistStore(store);

// @ts-ignore
window.persistor = persistor;

export type RootState = ReturnType<typeof rootReducer>;
