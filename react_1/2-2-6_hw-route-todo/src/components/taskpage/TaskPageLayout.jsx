import style from './TaskPageLayout.module.css';
import { Link } from 'react-router-dom';
import { CheckboxCompleted } from '../checkbox/CheckboxCompleted.jsx';
import { ButtonUpdate } from '../buttons/update/ButtonUpdate.jsx';
import { ButtonDelete } from '../buttons/delete/ButtonDelete.jsx';

export const TaskPageLayout = ({
								   todo,
								   setTodo,
								   updateTaskStatus,
								   updateTask,
								   deleteTask,
								   isUpdatingStatus,
								   isUpdatingTask,
								   isDeleting,
							   }) => {
	return (
		<div className={style.container}>
			<div className={style.headerTodo}>
				<Link className={style.link}
					  to={'/'}>{'←'}Go to Home</Link>
				<CheckboxCompleted
					todo={todo}
					setTodo={setTodo}
					isUpdatingStatus={isUpdatingStatus}
					updateTaskStatus={updateTaskStatus}
				>
					COMPLETED
				</CheckboxCompleted>
			</div>
			<div className={style.headerTask}>TASK</div>
			<div className={style.fieldTask}>{todo.task}</div>
			<div className={style.footer}>
				<div className={style.footerButtons}>
					<ButtonUpdate
						todo={todo}
						setTodo={setTodo}
						isUpdatingTask={isUpdatingTask}
						updateTask={updateTask}
					/>
					<ButtonDelete
						todo={todo}
						isDeleting={isDeleting}
						deleteTask={deleteTask}
					/>

				</div>
			</div>
		</div>
	);
};



