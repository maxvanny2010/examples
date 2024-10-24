import React, { useState } from 'react';
import { Todo } from './components/todo/Todo.jsx';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import { TaskPage } from './components/taskpage/TaskPage.jsx';

export default function App() {
	const [todos, setTodos] = useState([]);
	const [todosAll, setTodosAll] = useState([]);
	return (
		<Routes>
			<Route path="/"
				   element={<Layout />}>
				<Route index
					   element=
						   {
							   <Todo
								   todos={todos}
								   todosAll={todosAll}
								   setTodos={setTodos}
								   setTodosAll={setTodosAll}
							   />
						   }
				/>
				<Route path="/task-page/:id"
					   element=
						   {
							   <TaskPage
								   setTodos={setTodos}
								   setTodosAll={setTodosAll}
							   />
						   }></Route>
			</Route>
		</Routes>
	);
};



