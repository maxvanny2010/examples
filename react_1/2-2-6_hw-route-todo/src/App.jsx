import { Todo } from './components/todo/Todo.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import { TaskPage } from './components/taskpage/TaskPage.jsx';
import { PageNotFound } from './components/404/PageNotFound.jsx';

export default function App() {
	return (
		<Routes>
			<Route path="/"
				   element={<Layout />}>
				<Route index
					   element={<Todo />}
				/>
				<Route path="/task-page/:id"
					   element={<TaskPage />}>
				</Route>
				<Route path={'*'}
					   element={<Navigate to={'/404'} />} />
				<Route path={'/404'}
					   element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};



