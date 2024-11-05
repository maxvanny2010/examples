import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { appReducer, postReducer, postsReducer, userReducer, usersReducer } from './redux/reducers';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
export const store =
	createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));


