import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { setTokenToLocalStorage } from './util/set-token-local-storage.jsx';
import { AuthErrorForm, Button, HeaderTitle, Input } from '../components';
import { loginUserAsync } from '../redux/actions';
import { ERROR, PAGE } from '../constants';

const formLoginSchema = yup.object().shape({
	email: yup.string()
		.required('Email is required')
		.email('Email isn\'t correct')
		.min(7, 'Email: min 7 symbols')
		.max(10, 'Email: max 10 symbols'),

	password: yup.string()
		.required('Password is required')
		.matches(/^\w+$/, 'Password isn\'t correct')
		.min(3, 'Password: min 3 symbols')
		.max(6, 'Password: max 6 symbols'),
});

const LoginComponent = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [errorServer, setErrorServer] = useState('');
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(formLoginSchema),
	});

	const onSubmit = async ({ email, password }) => {
		setIsLoading(true);
		try {
			const result = await dispatch(loginUserAsync({ email, password }));
			if (result.res) {
				setTokenToLocalStorage(result.res);
				navigate(`${PAGE.RECORDS}`);
			} else setErrorServer(ERROR.RECORDS_NOT_FOUND);
		} catch (e) {
			console.error(e.message);
			setErrorServer(e.message ? ERROR.RECORDS_NOT_FOUND : '');
		} finally {
			setIsLoading(false);
			reset();
		}

	};
	const error =
		errors?.email?.message
		|| errors?.password?.message;
	const errorMessage = error || errorServer;
	return (
		<div className={className}>
			<HeaderTitle>Log In</HeaderTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="email..."
					{...register('email', {
							onChange: () => setErrorServer(null),
						},
					)}

				/>
				<Input
					type="password"
					placeholder="password... "
					{...register('password', {
							onChange: () => setErrorServer(null),
						},
					)}
				/>
				<Button type="submit"
						disabled={isLoading}>
					{isLoading ? 'Loading...' : 'Enter'}
				</Button>
				{errorMessage &&
					<AuthErrorForm>{errorMessage}</AuthErrorForm>
				}
			</form>
		</div>

	);
};
export const Login = styled(LoginComponent)`
`;
LoginComponent.propTypes = {
	className: PropTypes.string,
};
