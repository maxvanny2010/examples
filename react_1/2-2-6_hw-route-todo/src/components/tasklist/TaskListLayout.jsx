import style from './TaskListLayout.module.css';
import { Task } from '../task/Task.jsx';

export const TaskListLayout = ({
								   todos,
							   }) => {
	return (
		<>
			<table className={style.centerTable}>
				<tbody>
				{
					todos.map(({ id, task, completed }) => (
							<tr key={id}>
								<td>
									<Task id={id}
										  task={task}
										  completed={completed}
									/>
								</td>
							</tr>
						),
					)
				}
				</tbody>
			</table>
		</>
	);
};
