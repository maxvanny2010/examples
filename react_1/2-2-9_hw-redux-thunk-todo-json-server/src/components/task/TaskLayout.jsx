import style from './TaskLayout.module.css';
import PropTypes from 'prop-types';

export const TaskLayout = ({ todo }) => {
	return (
		<>
			<div className={style.cellTask}>
				<span className={todo.completed ? style.checked : style.unchecked}>
					{todo.task}
				</span>
			</div>
		</>
	);
};
TaskLayout.propTypes = {
	todo: PropTypes.object.isRequired,
};
