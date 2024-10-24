import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ButtonConfirm = ({ todo, updateTask }) => {
	const navigate = useNavigate();
	return (
		<>
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					updateTask(todo.id, todo).then(() => navigate('/'));
				}}
			>
				CONFIRM
			</button>
		</>
	);
};
ButtonConfirm.propTypes = {
	todo: PropTypes.object.isRequired,
	updateTask: PropTypes.func.isRequired,
};
