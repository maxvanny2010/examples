import PropTypes from 'prop-types';

export const CheckboxLayout = ({
								   todo,
								   children,
								   onChange,
							   }) => {

	return (
		<>
			<div>
				<input
					id={`checkbox-${todo.id}`}
					type="checkbox"
					checked={todo.completed}
					onChange={(e) => onChange(e.target.checked)}
				/>
				<label htmlFor={`checkbox-${todo.id}`}>{children}</label>
			</div>
		</>
	);
};
CheckboxLayout.propTypes = {
	todo: PropTypes.object.isRequired,
	children: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
