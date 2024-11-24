import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { recordsReducer, userReducer } from './redux/reducers';

const reducers = combineReducers({
	records: recordsReducer,
	users: userReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));
