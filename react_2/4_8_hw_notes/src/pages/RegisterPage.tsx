import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthForm } from '../components';

export default function RegisterPage() {
	const navigate = useNavigate();

	const handleRegister = (username: string) => {
		if (localStorage.getItem('user') === null) {
			localStorage.setItem('user', username);
			navigate('/login');
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
			<AuthForm title="Register"
					  buttonLabel="Sign up"
					  onSubmit={handleRegister} />
		</Box>
	);
}
