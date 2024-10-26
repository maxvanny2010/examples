import { useContext, useState } from 'react';
import { AppContext, FunctionContext } from '../../context/indexContext.jsx';

export const ButtonSort = () => {
	const { todos } = useContext(AppContext);
	const { setTodos } = useContext(FunctionContext);

	const [sort, setSort] = useState(true);

	const handleSort = () => {
		let compare = (a, b) => {
			return b.task.localeCompare(a.task);
		};
		if (sort) {
			compare = (a, b) => {
				return a.task.localeCompare(b.task);
			};
		}

		const sortedTodos = [...todos].sort(compare);
		setTodos(sortedTodos);
		setSort(!sort);
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
