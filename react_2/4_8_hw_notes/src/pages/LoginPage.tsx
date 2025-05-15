import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box } from '@mui/material';
import AuthForm from '../components/AuthForm';

export default function LoginPage() {
	const navigate = useNavigate();
	const [error, setError] = useState<string | null>(null);

	const handleLogin = (username: string) => {
		const savedUser = localStorage.getItem('user');
		if (savedUser === username) {
			setError(null);
			navigate('/');
		} else {
			setError('Username is incorrect');
		}
	};

	return (
		<Box
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AuthForm
				title="Sign in Notes"
				buttonLabel="Log in"
				onSubmit={handleLogin}
				linkTo="/register"
				linkText="Don't have an account? Register"
				error={error}
			/>
		</Box>
	);
}
