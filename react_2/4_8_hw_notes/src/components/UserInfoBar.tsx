import type { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const UserInfoBar: FC = () => {
	const navigate = useNavigate();
	const username = localStorage.getItem('user') || 'Guest';

	const handleLogout = () => {
		navigate('/login');
	};

	return (
		<Box display="flex"
			 justifyContent="flex-end"
			 alignItems="center"
			 gap={2}>
			<Typography variant="body1" sx={{ userSelect: 'none' }}>
				{username}
			</Typography>
			<Button variant="outlined" color="primary" onClick={handleLogout}>
				Logout
			</Button>
		</Box>
	);
};
