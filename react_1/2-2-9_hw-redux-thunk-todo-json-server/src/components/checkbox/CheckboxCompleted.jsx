import { CheckboxLayout } from './CheckboxLayout.jsx';
import { useDispatch } from 'react-redux';
import { updateTaskStatusAsync } from '../../actions/actionTask.jsx';
import PropTypes from 'prop-types';

export const CheckboxCompleted = ({ todo }) => {
	const dispatch = useDispatch();
	return (
		<CheckboxLayout
			todo={todo}
			onChange={(completed) => {
				dispatch(updateTaskStatusAsync(todo.id, { ...todo, completed }));
			}}
		/>
	);
};
CheckboxCompleted.propTypes = {
	todo: PropTypes.object.isRequired,
};
