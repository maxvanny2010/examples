import { useEffect, useState } from 'react';
import { onValue, push, ref, remove, set } from 'firebase/database';
import { db } from '../../config/firebase-config.jsx';

export const findDuplicate = (todos, input) => {
	const target = getTaskName(input).toLowerCase();
	return Object.entries(todos)
		.some(([_, { task, completed }]) => task.toLowerCase() === target);
};
export const getTaskName = (input) => {
	return input.trim().split(' ').filter(Boolean).join(' ');
};

const TODOS = 'todos';
export const useRequestGet = (setIsLoading) => {
	const [todos, setTodos] = useState([]);
	const [todosAll, setTodosAll] = useState([]);

	useEffect(() => {
		const todoDbRef = ref(db, TODOS);
		return onValue(todoDbRef, snapshot => {
			const loadedTodos = snapshot.val();
			setTodos(loadedTodos || {});
			setTodosAll(loadedTodos || {});
			setIsLoading(false);
		});

	}, []);
	return { todos, todosAll, setTodos };
};
export const useRequestCreate = (setIsLoading) => {
	return (input) => {
		setIsLoading(true);
		const todoDbRef = ref(db, TODOS);
		push(todoDbRef, {
			task: getTaskName(input),
			completed: false,
		})
			.catch(e => console.log('Task added is failed: ', e))
			.finally(() => setIsLoading(false));
	};
};

export const useRequestUpdateStatus = (setIsLoading) => {
	return (id, updateTask) => {
		setIsLoading(true);
		const todoDbRef = ref(db, `${TODOS}/${id}`);
		set(todoDbRef, updateTask)
			.catch(e => console.log(`Task for id ${id} update is failed: `, e))
			.finally(() => setIsLoading(false));
	};
};

export const useRequestUpdateTask = (setIsLoading) => {
	return (id, updateTask) => {
		setIsLoading(true);
		const todoRefDb = ref(db, `t${TODOS}/${id}`);
		set(todoRefDb, updateTask)
			.catch(e => console.log(`Task for id ${id} update is failed: `, e))
			.finally(() => setIsLoading(false));
	};
};

export const useRequestDelete = (setIsLoading) => {
	return (id) => {
		setIsLoading(true);
		const todoRefDb = ref(db, `${TODOS}/${id}`);
		remove(todoRefDb)
			.catch(e => console.log(`Deleting for id ${id} failed: `, e))
			.finally(() => setIsLoading(false));
	};
};
