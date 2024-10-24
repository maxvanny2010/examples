import style from './TaskPageLayout.module.css';
import { CheckboxCompleted } from '../checkbox/CheckboxCompleted.jsx';
import { ButtonUpdate } from '../buttons/update/ButtonUpdate.jsx';
import { ButtonDelete } from '../buttons/delete/ButtonDelete.jsx';
import PropTypes from 'prop-types';
import { ButtonConfirm } from '../buttons/confirm/ButtonConfirm.jsx';
import { GoHome } from '../link-gohome/GoHome.jsx';

export const TaskPageLayout = ({
								   todo,
								   setTodo,
								   updateTask,
								   deleteTask,
							   }) => {
	return (
		<div className={style.container}>
			<div className={style.headerTodo}>
				<GoHome setTodo={setTodo} />
				<CheckboxCompleted
					todo={todo}
					setTodo={setTodo}
				>
					COMPLETED
				</CheckboxCompleted>
			</div>
			<div className={style.headerTask}>TASK</div>
			<div className={style.fieldTask}>{todo.task}</div>
			<div className={style.footer}>
				<div className={style.footerButtons}>
					<ButtonConfirm
						todo={todo}
						updateTask={updateTask}
					/>
					<ButtonUpdate
						todo={todo}
						setTodo={setTodo}
					/>
					<ButtonDelete
						todo={todo}
						deleteTask={deleteTask}
					/>

				</div>
			</div>
		</div>
	);
};

TaskPageLayout.propTypes = {
	todo: PropTypes.object.isRequired,
	setTodo: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
};


