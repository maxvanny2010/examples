import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Input } from '../component';
import { useAuthCookie } from '../context';
import { PAGE } from '../constants';

const initialState = {
	email: '',
	password: '',
	confirmPassword: '',
};
export const SignUpContainer = ({ className }) => {
	const auth = useAuthCookie();
	const navigate = useNavigate();

	const [formData, setFormData] = useState(initialState);

	const handleChange = (field) => (event) => {
		setFormData({ ...formData, [field]: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData(initialState);
		auth.setItem(formData.email, () => {
			navigate(PAGE.LOGIN, { replace: true });
		});
	};

	return (
		<div className={className}>
			<form onSubmit={handleSubmit}>
				<Input type="text"
					   width="400px"
					   value={formData.email}
					   onChange={handleChange('email')}
				/>
				<Input type="password"
					   width="400px"
					   value={formData.password}
					   onChange={handleChange('password')}
				/>
				<Input type="password"
					   width="400px"
					   value={formData.confirmPassword}
					   onChange={handleChange('confirmPassword')}
				/>
				<Button type="submit"
						width="420px"
				>Sign up
				</Button>
			</form>
		</div>
	);
};
const SignUp = styled(SignUpContainer)`
	z-index: 3;
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 50%;
	width: 450px;
	padding: 20px;
	background: #282c34;
	border-radius: 4px;
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
	transition: transform 0.3s ease;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}

	.registered-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.registered-title {
		font-size: 20px;
		font-weight: bolder;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}
`;
export default SignUp;
SignUpContainer.propTypes = {
	onSubmit: PropTypes.func,
	className: PropTypes.string,
};
