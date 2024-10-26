import { CheckboxLayout } from './CheckboxLayout.jsx';
import { useContext } from 'react';
import { RequestsContext, TodoContext } from '../context/indexContext.jsx';

export const CheckboxCompleted = () => {
	const { updateTaskStatus } = useContext(RequestsContext);
	const { id, task } = useContext(TodoContext);
	return (
		<CheckboxLayout
			onChange={(completed) => {
				updateTaskStatus(
					id, { id, task, completed },
				);
			}}
		/>
	);
};
