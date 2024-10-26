import { useContext } from 'react';
import { TodoContext } from '../context/indexContext.jsx';
import PropTypes from 'prop-types';

export const CheckboxLayout = ({
								   onChange,
							   }) => {
	const { id, completed } = useContext(TodoContext);
	return (
		<input
			id={`checkbox-${id}`}
			type="checkbox"
			checked={completed}
			onChange={(e) => onChange(e.target.checked)}
		/>
	);
};
CheckboxLayout.propTypes = {
	onChange: PropTypes.func.isRequired,
};
