import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';

interface ProtectedRouteProps {
	children: JSX.Element;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const user = localStorage.getItem('user');
	return user ? children : <Navigate to="/login"
									   replace />;
}
