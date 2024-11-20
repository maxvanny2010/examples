import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { appReducer, testReducer } from './redux/reducer/index.jsx';

const reducers = combineReducers({
	test: testReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

