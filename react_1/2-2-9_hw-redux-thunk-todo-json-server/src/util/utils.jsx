export const findDuplicate = (todos, input) => {
	const target = getTaskName(input).toLowerCase();
	return todos.some(todo => todo.task.toLowerCase() === target);
};
export const getTaskName = (input) => {
	return input.trim().split(' ').filter(Boolean).join(' ');
};
