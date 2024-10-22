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
									isLoading,
									updateTaskStatus,
									updateTask,
									deleteTask,
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
						isCreating={isLoading}
						errorMessage={errorMessage}
						handleSearch={handleSearch}
					/>
					{<ButtonSort
						setTodos={setTodos}
						todos={todos}
					/>}
				</td>
			</tr>
			</thead>
			<tbody>
			{
				Object.entries(todos).map(([id, { task, completed }]) => (
						<tr key={id}>
							<td>
								<CheckboxCompleted
									id={id}
									task={task}
									completed={completed}
									isUpdatingStatus={isLoading}
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
									isUpdatingTask={isLoading}
									updateTask={updateTask}
								/>
							</td>
							<td>
								<ButtonDelete
									id={id}
									isDeleting={isLoading}
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
