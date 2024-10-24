import { CheckboxLayout } from './CheckboxLayout.jsx';
import PropTypes from 'prop-types';

export const CheckboxCompleted = ({
									  todo,
									  setTodo,
									  children,
								  }) => {
	return (
		<CheckboxLayout
			todo={todo}
			onChange={(checked) => {
				setTodo({ ...todo, completed: checked });
			}}
		>
			{children}
		</CheckboxLayout>
	);
};
CheckboxCompleted.propTypes = {
	todo: PropTypes.object.isRequired,
	setTodo: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
};
