import style from './TodoComponent.module.css';
import { ButtonDelete } from '../buttons/delete/ButtonDelete.jsx';
import { ButtonUpdate } from '../buttons/update/ButtonUpdate.jsx';
import { FormInput } from '../form/FormInput.jsx';
import { CheckboxCompleted } from '../checkbox/CheckboxCompleted.jsx';
import { TaskComponent } from '../task/TaskComponent.jsx';
import { ButtonSort } from '../buttons/sort/ButtonSort.jsx';
import { useContext } from 'react';
import { AppContext, TodoContext } from '../context/indexContext.jsx';


export const TodoTableLayout = () => {
	const { todos } = useContext(AppContext);
	return (
		<table className={style.centerTable}>
			<thead>
			<tr>
				<td colSpan={4}>
					<FormInput />
					<ButtonSort />
				</td>
			</tr>
			</thead>
			<tbody>
			{
				todos.map(({ id, task, completed }) => (
						<tr key={id}>
							<TodoContext.Provider value={{ id, task, completed }}>
								<td><CheckboxCompleted /></td>
								<td><TaskComponent /></td>
								<td><ButtonUpdate /></td>
								<td><ButtonDelete /></td>
							</TodoContext.Provider>
						</tr>
					),
				)
			}
			</tbody>
		</table>
	);
};
