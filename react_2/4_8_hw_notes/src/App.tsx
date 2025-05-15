import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotesLayout from './pages/NotesLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import RegisterPage from './pages/RegisterPage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login"
					   element={<LoginPage />} />
				<Route path="/register"
					   element={<RegisterPage />} />
				<Route
					path="/*"
					element={
						<ProtectedRoute>
							<NotesLayout />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
