import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE } from '../constants';
import { Button, Input } from '../component';
import { useAuth, useAuthCookie } from '../context';

export const SignInContainer = ({ className }) => {
	const auth = useAuth();
	const authCookie = useAuthCookie();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (authCookie.getItem() === email) {
			auth.signin(email, () => {
				navigate(PAGE.HOME, { replace: true });
			});
		}
	};

	return (
		<div className={className}>
			<form onSubmit={handleSubmit}>
				<Input type="text"
					   width="400px"
					   value={email}
					   onChange={(e) => setEmail(e.target.value)}
				/>
				<Input type="password"
					   width="400px"
					   value={password}
					   onChange={(e) => setPassword(e.target.value)}
				/>

				<Button type="submit"
						width="420px"
				>Sign in
				</Button>
			</form>
		</div>
	);
};
const SignIn = styled(SignInContainer)`
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
export default SignIn;
SignInContainer.propTypes = {
	onSubmit: PropTypes.func,
	className: PropTypes.string,
};
