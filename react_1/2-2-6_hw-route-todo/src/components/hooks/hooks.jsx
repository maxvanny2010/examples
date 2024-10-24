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
export const useRequestGetById = () => {
	return (id) => {
		return fetch(`${URL_TODOS}/${id}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		})
			.then(loadedData => {
				if (!loadedData.ok) throw new Error(`Failed to get task with id ${id}`);
				return loadedData.json();
			}).then(data => {
				return data;
			})
			.catch(error => {
				console.error(`Task for id ${id} get is failed: `, error);
				return null;
			});
	};
};
export const useRequestGet = (setTodos, setTodosAll) => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(URL_TODOS)
			.then(loadedData => loadedData.json())
			.then(data => {
				setTodos(data);
				setTodosAll(data);
			})
			.catch(error => console.error('Todos is missing ', error))
			.finally(() => setIsLoading(false));
	}, []);
	return { isLoading, setTodos, setTodosAll };
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
				setTodos(prevTodos => [...todosAll, newTask]);
			})
			.catch(error => console.error('Task added is failed: ', error))
			.finally(() => setIsCreating(false));
	};
	return { createTask, isCreating };
};

export const useRequestUpdateStatus = (setTodos, setTodosAll) => {
	const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
	const updateTaskStatus = (id, updateTask) => {
		setIsUpdatingStatus(true);
		return fetch(`${URL_TODOS}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(updateTask),
		})
			.then(loadedData => loadedData.json())
			.then(() => {
				updateStateTaskStatus(setTodos, id, updateTask);
				updateStateTaskStatus(setTodosAll, id, updateTask);
				return updateTask;
			}).catch(error => {
				console.error(`Task for id ${id} update is failed: `, error);
				throw error;
			})
			.finally(() => setIsUpdatingStatus(false));
	};
	return { updateTaskStatus, isUpdatingStatus };
};

export const useRequestUpdateTask = (setTodos, setTodosAll) => {
	const [isUpdatingTask, setIsUpdatingTask] = useState(false);
	const updateTask = (id, updateTask) => {
		return fetch(`${URL_TODOS}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(updateTask),
		})
			.then(loadedData => loadedData.json())
			.then(() => {
				updateStateTask(setTodos, id, updateTask);
				updateStateTask(setTodosAll, id, updateTask);
				return updateTask;
			})
			.catch(error => {
				console.error(`Task for id ${id} update is failed: `, error);
				throw error;
			})
			.finally(() => setIsUpdatingTask(false));
	};
	return { updateTask, isUpdatingTask };
};

export const useRequestDelete = (setTodos, setTodosAll) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const deleteTask = (id) => {
		setIsDeleting(true);
		return fetch(`${URL_TODOS}/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		})
			.then((response) => {
				filterTodos(setTodos, id);
				filterTodos(setTodosAll, id);
				return response;
			})
			.catch(error => {
				console.error(`Deleting for id ${id} failed: `, error);
				throw error;
			})
			.finally(() => setIsDeleting(false));
	};
	return { deleteTask, isDeleting };
};
