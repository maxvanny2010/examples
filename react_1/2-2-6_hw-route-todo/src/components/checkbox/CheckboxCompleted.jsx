import { CheckboxLayout } from './CheckboxLayout.jsx';

export const CheckboxCompleted = ({
									  todo,
									  setTodo,
									  children,
									  isUpdatingStatus,
									  updateTaskStatus,
								  }) => {
	return (
		<CheckboxLayout
			todo={todo}
			children={children}
			isUpdatingStatus={isUpdatingStatus}
			onChange={(checked) => {
				updateTaskStatus(
					todo.id,
					{
						...todo,
						completed: checked,
					},
				).then(updatedTask => {
					setTodo(updatedTask);
				});
			}}
		/>
	);
};
