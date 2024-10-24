import style from './TaskLayout.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TaskLayout = ({
							   id,
							   task,
							   completed,
						   }) => {
	return (
		<div className={style.cellTask}>
				<span className={completed ? style.completed : style.uncompleted}>
					{completed ? '\u2714' : <>&nbsp;&nbsp;&nbsp;</>}
				</span>
			<span
				className={style.ellipsis}>
					<Link className={style.link}
						  to={`task-page/${id}`}>
						{task}
					</Link>
			</span>
		</div>
	);
};
TaskLayout.propTypes = {
	id: PropTypes.number.isRequired,
	task: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
};
