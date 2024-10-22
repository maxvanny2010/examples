import { useEffect } from 'react';

function findMatches(task, target) {
	return task.toLowerCase().includes(target);
}

export const searchTaskDebounce = (searchTasks, setTodos, todosAll, input) => {
	useEffect(() => {
			const timer = setTimeout(() => {
				const result = Object.entries(todosAll)
					.filter(([_, { task, completed }]) => findMatches(task, searchTasks));
				const resultObj = Object.fromEntries(result);
				setTodos(searchTasks && input !== '' ? resultObj : todosAll);
			}, 300);
			return () => clearTimeout(timer);
		}, [searchTasks, input, todosAll],
	);
};
