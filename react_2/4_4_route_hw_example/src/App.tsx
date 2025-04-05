import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Main } from './pages/Main';
import { Category } from './pages/Category';
import { CategoryLayout } from './layout/CategoryLayout';
import { Detail } from './pages/Detail';
import { Categories } from './pages/Categories';

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/"
					   element={<Main />} />
				<Route path="/category"
					   element={<CategoryLayout />}>
					<Route index
						   element={<Categories />} />
					<Route path=":category"
						   element={<Category />} />
					<Route path=":category/:id"
						   element={<Detail />} />
				</Route>
				<Route path="/contact"
					   element={<Main />} />
				<Route path="*"
					   element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
}

export default App;
