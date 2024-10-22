import { useState } from 'react';

export const ButtonSort = ({
							   todos,
							   setTodos,
						   }) => {
	const [sort, setSort] = useState(true);

	const handleSort = () => {
		let compare = (a, b) => {
			return b[1].task.localeCompare(a[1].task);
		};
		if (sort) {
			compare = (a, b) => {
				return a[1].task.localeCompare(b[1].task);
			};
		}
		const sortedTodos = Object.entries(todos).sort(compare);
		const sortedTodosObj = Object.fromEntries(sortedTodos);

		setTodos(sortedTodosObj);
		setSort(!sort);
	};

	return (
		<>
			<button
				type="button"
				disabled={Object.keys(todos).length === 0}
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
