import PropTypes from 'prop-types';
import style from '../taskpage/TaskPageLayout.module.css';
import { Link } from 'react-router-dom';

export const GoHome = ({ setTodo }) => {
	const handleResetTodo = () => {
		setTodo({});
	};
	return (
		<Link
			className={style.link}
			to={'/'}
			onClick={() => handleResetTodo}
		>
			{'←'}Go to Home
		</Link>
	);
};
GoHome.propTypes = {
	setTodo: PropTypes.func.isRequired,
};
