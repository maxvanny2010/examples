import { FormInputLayout } from './FormInputLayout';
import { findDuplicate, getTaskName } from '../../util/utils.jsx';
import { messageErrorDuplicate, messageErrorNoDuplicates } from '../../actions/actionErrorMessage.jsx';
import { createTaskAsync, searchTodo } from '../../actions/actionTask.jsx';
import { clearInput } from '../../actions/actionLoading.jsx';
import { useDispatch, useSelector } from 'react-redux';

export const FormInput = () => {
	const dispatch = useDispatch();

	const todos = useSelector(state => state.stateTodos.todos);
	const input = useSelector(state => state.stateSearchTodo.task);

	const onSubmit = (event) => {
		event.preventDefault();
		const task = getTaskName(input);
		if (findDuplicate(todos, task)) {
			dispatch(messageErrorDuplicate());
			setTimeout(() => {
				dispatch(messageErrorNoDuplicates());
			}, 3000);
		} else {
			if (input.length !== 0) {
				dispatch(createTaskAsync(task));
				dispatch(clearInput());
			}
		}
	};
	const handleSearch = (event) => {
		const value = event.target.value;
		const target = getTaskName(value).toLowerCase();
		dispatch(searchTodo(target));
	};

	return (
		<FormInputLayout
			onSubmit={onSubmit}
			handleSearch={handleSearch}
		/>
	);
};
