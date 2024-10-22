import { useEffect } from 'react';

function findMatches(todo, target) {
	return todo.task.toLowerCase().includes(target);
}

export const searchTaskDebounce = (searchTasks, setTodos, todosAll, input) => {
	useEffect(() => {
			const timer = setTimeout(() => {
				const result = todosAll.filter(todo => findMatches(todo, searchTasks));
				setTodos(searchTasks && input !== '' ? result : todosAll);
			}, 300);
			return () => clearTimeout(timer);
		}, [searchTasks, input, todosAll],
	);
};
