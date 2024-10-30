import { TaskLayout } from './TaskLayout.jsx';
import PropTypes from 'prop-types';

export const TaskComponent = ({ todo }) => {
	return (
		<TaskLayout todo={todo} />
	);
};
TaskComponent.propTypes = {
	todo: PropTypes.object.isRequired,
};
