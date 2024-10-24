import { TaskLayout } from './TaskLayout.jsx';
import PropTypes from 'prop-types';

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
Task.propTypes = {
	id: PropTypes.number.isRequired,
	task: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
};
