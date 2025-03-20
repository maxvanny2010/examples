import { useState } from 'react';
import { Button, Radio } from '@mantine/core';
import { CustomInput } from './CustomInput.jsx';
import PropTypes from 'prop-types';

export const SignUp = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		nickname: '',
		email: '',
		gender: 'male',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (field) => (event) => {
		setFormData({ ...formData, [field]: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<CustomInput label="Name"
						 value={formData.name}
						 onChange={handleChange('name')} />
			<CustomInput label="Nik"
						 value={formData.nickname}
						 onChange={handleChange('nickname')} />
			<CustomInput label="Email"
						 type="email"
						 value={formData.email}
						 onChange={handleChange('email')} />
			<Radio.Group label="Sex"
						 value={formData.gender}
						 onChange={handleChange('gender')}>
				<CustomInput label="Female"
							 type="radio"
							 value="male"
							 name="gender" />
				<CustomInput label="Male"
							 type="radio"
							 value="female"
							 name="gender" />
			</Radio.Group>
			<CustomInput label="Password"
						 type="password"
						 value={formData.password}
						 onChange={handleChange('password')}
			/>
			<CustomInput label="Repeat password"
						 type="password"
						 value={formData.confirmPassword}
						 onChange={handleChange('confirmPassword')} />
			<Button type="submit">Registered</Button>
		</form>
	);
};
SignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
