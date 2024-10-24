import { useState } from 'react';
import PropTypes from 'prop-types';

export const ButtonSort = ({
							   todos,
							   setTodos,
						   }) => {
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
ButtonSort.propTypes = {
	todos: PropTypes.array.isRequired,
	setTodos: PropTypes.func.isRequired,
};
