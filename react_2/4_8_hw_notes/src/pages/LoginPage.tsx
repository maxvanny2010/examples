import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import AuthForm from '../components/AuthForm';

export default function LoginPage() {
	const navigate = useNavigate();

	const handleLogin = (username: string) => {
		if (localStorage.getItem('user') === username) {
			navigate('/');
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
			/>
		</Box>
	);
}
