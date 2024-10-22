import { TaskLayout } from './TaskLayout.jsx';

export const TaskComponent = ({ task, completed }) => {
	return (
		<TaskLayout task={task}
					completed={completed} />
	);
};
