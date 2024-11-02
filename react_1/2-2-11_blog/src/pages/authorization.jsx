import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useEffect, useState } from 'react';

import { server } from '../bff';
import { setUser } from '../redux/action';
import { selectUserRole } from '../redux/selectors';
import { Button, Icon, Input } from '../component';
import { ROLE } from '../utils';
import styled from 'styled-components';

const StyledSignup = styled.div`
	margin-top: 10px;
	font-size: 14px;
	display: inline-block;

`;
const StyledLink = styled(Link)`
	text-decoration: none;
	text-align: center;
	margin: 10px 0 0 8px;
	font-size: 16px;
	color: #8cc718;
	display: inline-block;
	transition: transform 0.1s ease;

	&:hover {
		color: #a5f804;
	}

	&:active {
		transform: scale(0.95);
	}

`;
const ErrorMessage = styled.div`
	margin: 10px 0 0;
	padding: 10px;
	font-size: 14px;
	border-radius: 4px;
	background: rgba(145, 67, 115, 0.17);
	display: flex;
	flex-direction: row;
	justify-content: start;
`;
const authFormSchema = yup.object().shape({
	login: yup.string()
		.required('Login is required')
		.matches(/^\w+$/, 'Login is not correct')
		.min(3, 'Login: min 3 symbols')
		.max(15, 'Login: max 15 symbols'),
	password: yup.string()
		.required('Password is required')
		.matches(/^[\w#%]+$/, 'Password is not correct')
		.min(6, 'Password: min 6 symbols')
		.max(30, 'Password: max 30 symbols'),
});
const AuthorizationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValue: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});
	const [serverError, setServerError] = useState(null);
	const roleId = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const store = useStore();
	useEffect(() => {
		return store.subscribe(() => {
			if (store.getState().app.isLogout) reset();
		});
	}, [reset, store]);
	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};
	const errorForm =
		errors?.login?.message || errors?.password?.message;
	const errorMessage = errorForm || serverError;

	if (roleId !== ROLE.GUEST) return <Navigate to={'/'} />;
	return (
		<div className={className}>
			<Icon size="24px"
				  id="fa-forumbee"
				  margin="25px 20px 0 0"
				  color="#8DCC0A"
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text"
					   placeholder="Login..." {...register('login', {
						onChange: () => setServerError(null),
					},
				)} />
				<Input type="password"
					   placeholder="Password..." {...register('password', {
					onChange: () => setServerError(null),
				})} />
				<Button type="submit"
						disabled={!!errorForm}>Log in
				</Button>
				{errorMessage &&
					<ErrorMessage>{errorMessage}</ErrorMessage>
				}
				<StyledSignup>
					Don’t you have an account?
					<StyledLink to={'/register'}>
						Sign up
					</StyledLink>
				</StyledSignup>
			</form>
		</div>
	)
		;
};
export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
AuthorizationContainer.propTypes = {
	className: PropTypes.string,
};
