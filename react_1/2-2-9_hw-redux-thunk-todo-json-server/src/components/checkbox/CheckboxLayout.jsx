import PropTypes from 'prop-types';

export const CheckboxLayout = ({
								   todo,
								   onChange,
							   }) => {

	return (
		<input
			id={`checkbox-${todo.id}`}
			type="checkbox"
			checked={todo.completed}
			onChange={(e) => onChange(e.target.checked)}
		/>
	);
};
CheckboxLayout.propTypes = {
	todo: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};
