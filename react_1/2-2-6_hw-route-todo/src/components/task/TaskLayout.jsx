import style from './TaskLayout.module.css';

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
					<a className={style.link}
					   href={`task-page/${id}`}>
						{task}
					</a>
				</span>
		</div>
	);
};
