import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import favoritesReducer from './favorite/slice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	favorites: favoritesReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(
			apiSlice.middleware,
		),

});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

