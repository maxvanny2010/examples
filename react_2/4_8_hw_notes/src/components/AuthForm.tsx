import { Paper, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

interface AuthFormProps {
	title: string;
	buttonLabel: string;
	onSubmit: (username: string) => void;
	linkTo?: string;
	linkText?: string;
}

export default function AuthForm({
									 title,
									 buttonLabel,
									 onSubmit,
									 linkTo,
									 linkText,
								 }: AuthFormProps) {
	const [username, setUsername] = useState('');

	const handleSubmit = () => {
		if (username.trim()) {
			onSubmit(username.trim());
		}
	};

	return (
		<Paper
			elevation={0}
			sx={{
				p: 4,
				width: 400,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 2,
			}}
		>
			<Typography variant="h5" component="h2" align="center">
				{title}
			</Typography>

			<TextField
				label="Username"
				placeholder="Enter username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
				fullWidth
			/>

			<Button
				variant="contained"
				fullWidth
				onClick={handleSubmit}
				disabled={!username.trim()}
			>
				{buttonLabel}
			</Button>
			{linkTo && linkText && (
				<Typography variant="body2">
					<Link component={RouterLink} to={linkTo} underline="hover">
						{linkText}
					</Link>
				</Typography>
			)}
		</Paper>
	);
}
