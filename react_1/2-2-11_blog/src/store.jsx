import { thunk } from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { appReducer, postReducer, postsReducer, userReducer, usersReducer } from './redux/reducers';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
	app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose;
export const store =
	createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
