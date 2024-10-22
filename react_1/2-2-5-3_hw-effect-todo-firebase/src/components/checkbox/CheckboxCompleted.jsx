import { CheckboxLayout } from './CheckboxLayout.jsx';

export const CheckboxCompleted = ({ id, task, completed, isUpdatingStatus, updateTaskStatus }) => {
	return (
		<CheckboxLayout
			id={id}
			completed={completed}
			isUpdatingStatus={isUpdatingStatus}
			onChange={(checked) => {
				updateTaskStatus(
					id,
					{
						id: id,
						task: task,
						completed: checked,
					},
				);
			}}
		/>
	);
};
