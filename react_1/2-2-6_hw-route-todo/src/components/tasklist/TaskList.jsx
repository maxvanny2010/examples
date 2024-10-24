import { TaskListLayout } from './TaskListLayout.jsx';
import PropTypes from 'prop-types';

export const TaskList = ({
							 todos,
						 }) => {
	return (
		<TaskListLayout todos={todos} />
	);
};
TaskList.propTypes = {
	todos: PropTypes.array.isRequired,
};
