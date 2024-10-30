import { getTaskName } from '../util/utils.jsx';
import { TYPE } from '../constants/TYPE.jsx';
import { finishLoading, startLoading } from './actionLoading.jsx';

const URL_TODOS = 'http://localhost:5000/todos';

/** Objects **/
export const sortTodo = (data, checked) => ({
	type: TYPE.SORT,
	payload: { data, checked },
});
export const updateSort = (sort) => ({
	type: TYPE.UPDATE_SORT,
	payload: sort,
});
export const searchTodo = (task) => ({
	type: TYPE.SEARCH,
	payload: task,
});
export const filterListTodo = (result) => ({
	type: TYPE.FILTER,
	payload: result,
});

export const getTodos = (data) => ({
	type: TYPE.GET,
	payload: data,
});

/** ASYNC FUNCTIONS**/
export const fillTodosListAsync = () => (dispatch) => {
	dispatch(startLoading());
	fetch(URL_TODOS)
		.then(loadedData => loadedData.json())
		.then(data => dispatch(getTodos(data)))
		.catch(e => console.log('Todos is missing ', e))
		.finally(() => dispatch(finishLoading()));
};
/* create */
export const createTodo = (todo) => ({
	type: TYPE.CREATE,
	payload: todo,
});
export const createTaskAsync = (task) => (dispatch) => {
	dispatch(startLoading());
	fetch(URL_TODOS, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify({
			task: getTaskName(task),
			completed: false,
		}),
	})
		.then(loadedData => loadedData.json())
		.then((newTodo) => {
			dispatch(createTodo(newTodo));
			dispatch(fillTodosListAsync());
		})
		.catch(e => console.log('Task added is failed: ', e))
		.finally(() => dispatch(finishLoading()));
};

/* update task */
export const updateTask = (id, todo) => ({
	type: TYPE.UPDATE,
	payload: { id, todo },
});
export const updateTaskAsync = (id, todo) => (dispatch) => {
	dispatch(startLoading());
	fetch(`${URL_TODOS}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(todo),
	})
		.then(loadedData => loadedData.json())
		.then(() => {
			dispatch(updateTask(id, todo));
			dispatch(fillTodosListAsync());
		})
		.catch(e => console.log(`Task for id ${id} update is failed: `, e))
		.finally(() => dispatch(finishLoading()));
};

/* update completed task */
export const updateTaskStatus = (id, todo) => ({
	type: TYPE.UPDATE,
	payload: { id, todo },
});
export const updateTaskStatusAsync = (id, todo) => (dispatch) => {
	dispatch(startLoading());
	fetch(`${URL_TODOS}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(todo),
	})
		.then(loadedData => loadedData.json())
		.then(() => {
			dispatch(updateTaskStatus(id, todo));
			dispatch(fillTodosListAsync());
		})
		.catch(e => console.log(`Task for id ${id} update is failed: `, e))
		.finally(() => dispatch(finishLoading()));
};

/* delete */
export const deleteTask = (id) => ({
	type: TYPE.DELETE,
	payload: id,
});
export const deleteTaskAsync = (id) => (dispatch) => {
	dispatch(startLoading());
	fetch(`${URL_TODOS}/${id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
	})
		.then(() => {
			dispatch(deleteTask(id));
			dispatch(fillTodosListAsync());
		})
		.catch(e => console.log(`Deleting for id ${id} failed: `, e))
		.finally(() => dispatch(finishLoading()));
};
