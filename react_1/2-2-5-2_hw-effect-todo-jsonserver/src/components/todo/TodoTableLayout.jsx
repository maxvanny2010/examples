import style from './TodoComponent.module.css';
import { ButtonDelete } from '../buttons/delete/ButtonDelete.jsx';
import { ButtonUpdate } from '../buttons/update/ButtonUpdate.jsx';
import { FormInput } from '../form/FormInput.jsx';
import { CheckboxCompleted } from '../checkbox/CheckboxCompleted.jsx';
import { TaskComponent } from '../task/TaskComponent.jsx';
import { ButtonSort } from '../buttons/sort/ButtonSort.jsx';


export const TodoTableLayout = ({
									todos,
									setTodos,
									onInput,
									onSubmit,
									isCreating,
									updateTaskStatus,
									isUpdatingStatus,
									updateTask,
									isUpdatingTask,
									deleteTask,
									isDeleting,
									setOnInput,
									errorMessage,
									handleSearch,
								}) => {
	return (
		<table className={style.centerTable}>
			<thead>
			<tr>
				<td colSpan={4}>
					<FormInput
						onSubmit={onSubmit}
						onInput={onInput}
						setOnInput={setOnInput}
						isCreating={isCreating}
						errorMessage={errorMessage}
						handleSearch={handleSearch}
					/>
					<ButtonSort
						setTodos={setTodos}
						todos={todos}
					/>
				</td>
			</tr>
			</thead>
			<tbody>
			{
				todos.map(({ id, task, completed }) => (
						<tr key={id}>
							<td>
								<CheckboxCompleted
									id={id}
									task={task}
									completed={completed}
									isUpdatingStatus={isUpdatingStatus}
									updateTaskStatus={updateTaskStatus}
								/>
							</td>
							<td>
								<TaskComponent task={task}
											   completed={completed} />
							</td>
							<td>
								<ButtonUpdate
									id={id}
									task={task}
									completed={completed}
									isUpdatingTask={isUpdatingTask}
									updateTask={updateTask}
								/>
							</td>
							<td>
								<ButtonDelete
									id={id}
									isDeleting={isDeleting}
									deleteTask={deleteTask}
								/>
							</td>

						</tr>
					),
				)
			}
			</tbody>
		</table>
	);
};
