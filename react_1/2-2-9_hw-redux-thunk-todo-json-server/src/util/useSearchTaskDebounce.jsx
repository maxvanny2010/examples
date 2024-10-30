import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillTodosListAsync, filterListTodo } from '../actions/actionTask.jsx';

function findMatches(todo, target) {
	return todo.task.toLowerCase().includes(target);
}

export const useSearchTaskDebounce = () => {
	const dispatch = useDispatch();
	const searchTodo = useSelector(state => state.stateSearchTodo.task);
	const todosAll = useSelector(state => state.stateTodos.todosAll);
	useEffect(() => {
			const timer = setTimeout(() => {
				const result = todosAll.filter(todo => findMatches(todo, searchTodo));
				dispatch(
					searchTodo.trim().length === 0
						? fillTodosListAsync()
						: filterListTodo(result),
				);
			}, 300);
			return () => clearTimeout(timer);
		}, [dispatch, searchTodo],
	);
};
