import type { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

interface UserInfoBarProps {
	onCreateNote: () => void;
}

export const UserInfoBar: FC<UserInfoBarProps> = ({ onCreateNote }) => {
	const navigate = useNavigate();
	const username = localStorage.getItem('user') || 'Guest';

	const handleLogout = () => {
		navigate('/login');
	};

	return (
		<Box display="flex"
			 justifyContent="space-between"
			 alignItems="center">
			<Button
				variant="contained"
				startIcon={<AddIcon />}
				onClick={onCreateNote}
			>
				Add Note
			</Button>

			<Box display="flex"
				 alignItems="center"
				 gap={2}>
				<Typography variant="body1"
							sx={{ userSelect: 'none' }}>
					{username}
				</Typography>
				<Button variant="outlined"
						color="primary"
						onClick={handleLogout}>
					Logout
				</Button>
			</Box>
		</Box>
	);
};

