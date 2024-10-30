import { useDispatch, useSelector } from 'react-redux';
import { sortTodo, updateSort } from '../../../actions/actionTask.jsx';

export const ButtonSort = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.stateTodos.todos);
	const sort = useSelector(state => state.stateSort.sort);

	const handleSort = () => {
		dispatch(sortTodo(todos, sort));
		dispatch(updateSort(sort));
	};
	return (
		<>
			<button
				type="button"
				disabled={todos.length === 0}
				onClick={(e) => {
					e.stopPropagation();
					handleSort();
				}}
			>
				SORT {sort ? '▼' : '▲'}
			</button>
		</>
	);
};
