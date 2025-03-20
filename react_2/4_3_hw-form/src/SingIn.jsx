import { useState } from 'react';
import { Button } from '@mantine/core';
import { CustomInput } from './CustomInput.jsx';
import PropTypes from 'prop-types';

export const SignIn = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ email, password });
	};

	return (
		<form onSubmit={handleSubmit}>
			<CustomInput label="Email"
						 type="email"
						 value={email}
						 onChange={(e) => setEmail(e.target.value)} />
			<CustomInput label="Password"
						 type="password"
						 value={password}
						 onChange={(e) => setPassword(e.target.value)} />
			<Button type="submit">Enter</Button>
		</form>
	);
};
SignIn.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
