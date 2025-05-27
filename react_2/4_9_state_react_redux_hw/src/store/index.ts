import thunk from 'redux-thunk';
import { persistedReducer } from './reducers';
import { persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
