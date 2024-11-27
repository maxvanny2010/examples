import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { PATH, METHOD, requests, ROLE, STORAGE_USER_DATA, proxy } from '../../utils';
import { AuthErrorForm, Button, Icon, Input } from '../../component';
import { selectUserRole } from '../../redux/selectors';
import { setUser } from '../../redux/action';
import { useResetForm } from '../../hooks';
import styled from 'styled-components';

const regFormSchema = yup.object().shape({
	login: yup.string()
		.required('Login is required')
		.matches(/^\w+$/, 'Login is not correct')
		.min(3, 'Login: min 3 symbols')
		.max(15, 'Login: max 15 symbols'),
	password: yup.string()
		.required('Password is required')
		.matches(/^[\w#%]+$/, 'Password is not correct')
		.min(3, 'Password: min 3 symbols')
		.max(30, 'Password: max 30 symbols'),
	passcheck: yup.string()
		.required('Password is required')
		.oneOf([yup.ref('password'), null],
			'Password is not same'),
});
const RegistrationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});
	const [serverError, setServerError] = useState(null);
	const roleId = useSelector(selectUserRole);
	const dispatch = useDispatch();
	useResetForm(reset);
	const onSubmit = ({ login, password }) => {
		requests(`${proxy}${PATH.REGISTER}`,
			METHOD.POST, { login, password })
			.then(({ error, user }) => {
				if (error) {
					setServerError(`${error}`);
					return;
				}
				dispatch(setUser(user));
				sessionStorage.setItem(STORAGE_USER_DATA, JSON.stringify(user));
			});
	};
	const errorForm =
		errors?.login?.message
		|| errors?.password?.message
		|| errors?.passcheck?.message;
	const errorMessage = errorForm || serverError;

	if (roleId !== ROLE.GUEST) return <Navigate to={`${PATH.HOME}`} />;
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
				<Input type="password"
					   placeholder="Repeat password..." {...register('passcheck', {
					onChange: () => setServerError(null),
				})} />
				<Button type="submit"
						disabled={!!errorForm}>Sign in
				</Button>
				{errorMessage &&
					<AuthErrorForm>{errorMessage}</AuthErrorForm>
				}
			</form>
		</div>
	);
};
export const Registration = styled(RegistrationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
RegistrationContainer.propTypes = {
	className: PropTypes.string,
};
