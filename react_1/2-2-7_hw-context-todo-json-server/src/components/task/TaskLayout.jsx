import style from './TaskLayout.module.css';
import { useContext } from 'react';
import { TodoContext } from '../context/indexContext.jsx';

export const TaskLayout = () => {
	const { task, completed } = useContext(TodoContext);
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
