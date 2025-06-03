import { nanoid } from 'nanoid';

const todos = new Map(); // Map<login, Map<todoId, todos>>

export const todoService = {
	create(login, title) {
		if (typeof title !== 'string') {
			return { success: false, error: `Title should be a string, got ${typeof title}` };
		}

		const todo = {
			id: nanoid(),
			title,
			completed: false,
		};

		if (!todos.has(login)) {
			todos.set(login, new Map());
		}

		todos.get(login).set(todo.id, todo);

		return { success: true, data: todo };
	},

	get(login) {
		const userTodos = todos.get(login);
		return {
			success: true,
			data: userTodos ? Array.from(userTodos.values()) : [],
		};
	},

	update(login, id, data) {
		const userTodos = todos.get(login);
		if (!userTodos || !userTodos.has(id)) {
			return { success: false, error: `Todo with id ${id} not found` };
		}

		const todo = userTodos.get(id);

		if (data.hasOwnProperty('title') && typeof data.title === 'string') {
			todo.title = data.title;
		}

		if (data.hasOwnProperty('completed')) {
			todo.completed = data.completed === true;
		}

		return { success: true, data: todo };
	},

	delete(login, id) {
		const userTodos = todos.get(login);
		if (!userTodos || !userTodos.has(id)) {
			return { success: false, error: `Todo with id ${id} not found` };
		}

		userTodos.delete(id);

		return {
			success: true,
			data: Array.from(userTodos.values()),
		};
	},
};
