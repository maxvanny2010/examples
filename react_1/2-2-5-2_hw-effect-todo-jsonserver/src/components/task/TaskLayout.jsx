import style from './TaskLayout.module.css';

export const TaskLayout = ({ task, completed }) => {
	return (
		<>
			<div className={style.cellTask}>
				<span className={completed ? style.checked : style.unchecked}>
					{task}
				</span>
			</div>
		</>
	);
};
