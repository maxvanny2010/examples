import style from './TodoComponent.module.css';
import { FormInput } from '../form/FormInput.jsx';
import { ButtonSort } from '../buttons/sort/ButtonSort.jsx';
import { useSelector } from 'react-redux';
import { TodoRow } from '../todorow/TodoRow.jsx';


export const TodoTableLayout = () => {
	const todos = useSelector(state => state.stateTodos.todos);
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
				todos.map((todo) => (
					<tr key={todo.id}>
						<TodoRow todo={todo} />
					</tr>
				))
			}
			</tbody>
		</table>
	);
};
