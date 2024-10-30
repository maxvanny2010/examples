import { TYPE } from '../constants/TYPE.jsx';

const initialState = {
	todos: [],
	todosAll: [],
};

export const todoReducers = (state = initialState, action) => {
	const payload = action.payload;
	switch (action.type) {
		case TYPE.GET:
			return { ...state, todos: payload, todosAll: payload };
		case TYPE.CREATE: {
			return { ...state, todos: [...state.todos, payload] };
		}
		case TYPE.UPDATE: {
			const { idx, updateTodo } = payload;
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === idx ? { ...todo, ...updateTodo } : todo),
			};
		}
		case TYPE.COMPLETED: {
			const { idx, updateTodo } = payload;
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === idx ? { ...updateTodo, task: todo.task } : todo),
			};
		}
		case TYPE.DELETE:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== payload),
			};
		case TYPE.SORT: {
			const compare = payload.checked
				? (a, b) => a.task.localeCompare(b.task)
				: (a, b) => b.task.localeCompare(a.task);
			return { ...state, todos: [...payload.data.sort(compare)] };
		}
		case TYPE.FILTER:
			return { ...state, todos: payload };
		default:
			return state;
	}
};
