import { Route, Routes } from 'react-router-dom';
import { Book } from './Book.jsx';
import { NewBook } from './NewBook.jsx';
import { BookLayout } from './BookLayout.jsx';

export function BookRoutes() {
	return (
		<>
			<Routes>
				<Route element={<BookLayout />}>
					<Route index
						   element={<div />} />
					<Route path=":id"
						   element={<Book />} />
					<Route path="new"
						   element={<NewBook />} />
				</Route>
			</Routes>
		</>
	);
}
