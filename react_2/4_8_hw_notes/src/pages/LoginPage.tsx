import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { AuthForm } from '../components';

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
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				px: 2,
				bgcolor: 'background.default',
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
