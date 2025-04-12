import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About, BookLayout, Books, Home, Login } from './pages';
import { AuthStatus, Header, PrivateRoute } from './component';
import { AuthProvider } from './context';
import { internalPaths } from './util';

export const App = () => {
	return (
		<AuthProvider>
			<AuthStatus />
			<Header />
			<Routes>
				<Route element={<BookLayout />}>
					<Route path={internalPaths.home}
						   element={<Home />} />
					<Route path={internalPaths.about}
						   element={<About />} />
					<Route path={internalPaths.books}
						   element={<PrivateRoute><Books /></PrivateRoute>} />
					<Route path={internalPaths.login}
						   element={<Login />} />
				</Route>
			</Routes>

		</AuthProvider>
	);
};
