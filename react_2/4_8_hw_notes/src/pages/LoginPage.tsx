import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { AuthForm } from '../components';
import { ROUTES, TITLES } from '../constants';

export default function LoginPage() {
	const navigate = useNavigate();
	const [error, setError] = useState<string | null>(null);

	const handleLogin = (username: string) => {
		const savedUser = localStorage.getItem(TITLES.USER);
		if (savedUser === username) {
			setError(null);
			navigate(ROUTES.ROOT);
		} else {
			setError(TITLES.USERNAME_INCORRECT);
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
				title={TITLES.SIGN_IN_NOTES}
				buttonLabel={TITLES.LOGIN}
				onSubmit={handleLogin}
				linkTo={ROUTES.REGISTER}
				linkText={TITLES.REGISTER_PROMPT}
				error={error}
			/>
		</Box>
	);
}
