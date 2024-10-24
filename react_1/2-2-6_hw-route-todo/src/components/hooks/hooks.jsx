import { useCallback, useEffect, useState } from 'react';

const URL_TODOS = 'http://localhost:5000/todos';

export const findDuplicate = (todos, input) => {
	const target = getTaskName(input).toLowerCase();
	return todos.some(todo => todo.task.toLowerCase() === target);
};
export const getTaskName = (input) => {
	return input.trim().split(' ').filter(Boolean).join(' ');
};

export const useRequestGetById = () => {
	return useCallback((id) => {
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
	}, []);
};
export const useRequestGet = () => {
	const [todos, setTodos] = useState([]);
	const [todosAll, setTodosAll] = useState([]);
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
	return { isLoading, todos, todosAll, setTodos, setTodosAll };
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
			.catch(error => console.error('Task added is failed: ', error))
			.finally(() => setIsCreating(false));
	};
	return { isCreating, createTask };
};

export const useRequestUpdateTask = () => {
	return (id, updateTask) => {
		return fetch(`${URL_TODOS}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(updateTask),
		})
			.then(loadedData => loadedData.json())
			.then(() => {
				return updateTask;
			})
			.catch(error => {
				console.error(`Task for id ${id} update is failed: `, error);
				throw error;
			});
	};
};

export const useRequestDelete = () => {
	return (id) => {
		return fetch(`${URL_TODOS}/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		})
			.then((response) => {
				return response;
			})
			.catch(error => {
				console.error(`Deleting for id ${id} failed: `, error);
				throw error;
			});
	};
};
