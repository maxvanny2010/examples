import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { todoReducers } from './reducers/todo-reducer.jsx';
import { loadingReducer } from './reducers/loading-reducer.jsx';
import { sortReducer } from './reducers/sort-reducer.jsx';
import { searchTodoReducer } from './reducers/search-todo.jsx';
import { errorReducer } from './reducers/errors-reducer.jsx';

const reducer = combineReducers({
	stateTodos: todoReducers,
	stateLoading: loadingReducer,
	stateSort: sortReducer,
	stateSearchTodo: searchTodoReducer,
	stateError: errorReducer,
});
export const store = createStore(reducer, applyMiddleware(thunk));
