import { useEffect, useState } from 'react';

const URL_TODOS = 'http://localhost:5000/todos';

export const findDuplicate = (todos, input) => {
	const target = getTaskName(input).toLowerCase();
	return todos.some(todo => todo.task.toLowerCase() === target);
};
export const getTaskName = (input) => {
	return input.trim().split(' ').filter(Boolean).join(' ');
};

const updateStateTaskStatus = (setState, id, updateTask) => {
	setState(prev => {
		return prev.map(todo => todo.id === id ? updateTask : todo);
	});
};

const filterTodos = (setState, id) => {
	setState(prev => {
		return prev.filter(todo => todo.id !== id);
	});
};

const updateStateTask = (setState, id, updateTask) => {
	return setState(prev => {
		return prev.map(todo => todo.id === id ? updateTask : todo);
	});
};

export const useRequestGet = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);
	const [todosAll, setTodosAll] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(URL_TODOS)
			.then(loadedData => loadedData.json())
			.then(data => {
				setTodos(data);
				setTodosAll(data);
			})
			.catch(e => console.log('Todos is missing ', e))
			.finally(() => setIsLoading(false));
	}, []);
	return { isLoading, setTodos, setTodosAll, todos, todosAll };
};
export const useRequestCreate = (setTodos, setTodosAll, todosAll) => {
	const [isCreating, setIsCreating] = useState(false);

	const createTask = (input) => {
		setIsCreating(true);
		fetch(URL_TODOS, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify({
				task: getTaskName(input),
				completed: false,
			}),
		})
			.then(loadedData => loadedData.json())
			.then(newTask => {
				setTodosAll(prevTodosAll => [...prevTodosAll, newTask]);
				setTodos(() => [...todosAll, newTask]);
			})
			.catch(e => console.log('Task added is failed: ', e))
			.finally(() => {
				setIsCreating(false);
			});
	};
	return { createTask, isCreating };
};

export const useRequestUpdateStatus = (setTodos, setTodosAll) => {
	const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
	const updateTaskStatus = (id, updateTask) => {
		setIsUpdatingStatus(true);
		fetch(`${URL_TODOS}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(updateTask),
		})
			.then(loadedData => loadedData.json())
			.then(() => {
				updateStateTaskStatus(setTodos, id, updateTask);
				updateStateTaskStatus(setTodosAll, id, updateTask);
			}).catch(e => console.log(`Task for id ${id} update is failed: `, e))
			.finally(() => setIsUpdatingStatus(false));
	};
	return { updateTaskStatus, isUpdatingStatus };
};

export const useRequestUpdateTask = (setTodos, setTodosAll) => {
	const [isUpdatingTask, setIsUpdatingTask] = useState(false);
	const updateTask = (id, updateTask) => {
		fetch(`${URL_TODOS}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(updateTask),
		})
			.then(loadedData => loadedData.json())
			.then(() => {
				updateStateTask(setTodos, id, updateTask);
				updateStateTask(setTodosAll, id, updateTask);
			})
			.catch(e => console.log(`Task for id ${id} update is failed: `, e))
			.finally(() => setIsUpdatingTask(false));
	};
	return { updateTask, isUpdatingTask };
};

export const useRequestDelete = (setTodos, setTodosAll) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const deleteTask = (id) => {
		setIsDeleting(true);
		fetch(`${URL_TODOS}/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		})
			.then(() => {
				filterTodos(setTodos, id);
				filterTodos(setTodosAll, id);
			})
			.catch(e => console.log(`Deleting for id ${id} failed: `, e))
			.finally(() => setIsDeleting(false));
	};
	return { deleteTask, isDeleting };
};
