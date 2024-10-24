import { TaskLayout } from './TaskLayout.jsx';

export const Task = ({
						 id,
						 task,
						 completed,
					 }) => {
	return (
		<TaskLayout id={id}
					task={task}
					completed={completed}
		/>
	);
};
