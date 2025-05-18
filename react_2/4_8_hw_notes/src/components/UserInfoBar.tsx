import type { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { ROUTES, TITLES } from '../constants';

interface UserInfoBarProps {
	onCreateNote: () => void;
}

export const UserInfoBar: FC<UserInfoBarProps> = ({ onCreateNote }) => {
	const navigate = useNavigate();
	const username = localStorage.getItem(TITLES.USER) || TITLES.GUEST;

	const handleLogout = () => {
		navigate(ROUTES.LOGOUT);
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
				{TITLES.CREATE_NOTE}
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
					{TITLES.LOGOUT}
				</Button>
			</Box>
		</Box>
	);
};

