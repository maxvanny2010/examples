import style from './TodoLayout.module.css';
import { FormInput } from '../form/FormInput.jsx';
import { ButtonSort } from '../buttons/sort/ButtonSort.jsx';
import PropTypes from 'prop-types';


export const TodoManagerLayout = ({
									  todos,
									  setTodos,
									  onInput,
									  onSubmit,
									  isCreating,
									  setOnInput,
									  errorMessage,
									  handleSearch,
								  }) => {
	return (
		<>
			<table className={style.centerTable}>
				<tbody>
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
				</tbody>
			</table>
		</>
	);
};
TodoManagerLayout.propTypes = {
	todos: PropTypes.array.isRequired,
	setTodos: PropTypes.func.isRequired,
	onInput: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	isCreating: PropTypes.bool.isRequired,
	setOnInput: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
};
