import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { getCsrfToken, getSession, signIn } from 'next-auth/react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';

// --- Схема валидации Zod ---
const loginSchema = z.object({
	email: z.string().min(1, 'Email обязателен').email('Неверный формат email'),
	password: z.string().min(3, 'Пароль должен содержать минимум 3 символа'),
});

type FormData = z.infer<typeof loginSchema>;

// --- Компонент поля ввода ---
interface InputFieldProps {
	label: string;
	id: keyof FormData;
	type?: string;
	placeholder?: string;
	icon?: React.ReactNode;
	error?: string;
	register: UseFormRegisterReturn;
	autoComplete?: string;
	children?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
												   label,
												   id,
												   type = 'text',
												   placeholder,
												   icon,
												   error,
												   register,
												   autoComplete,
												   children,
											   }) => {
	return (
		<div className="mb-4">
			<label htmlFor={id}
				   className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<div className="relative">
				{icon &&
					<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">{icon}</span>}
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					autoComplete={autoComplete}
					{...register}
					className={`w-full pl-10 pr-10 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
						error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
					}`}
				/>
				{children}
			</div>
			{error && <p className="text-sm text-red-600 mt-1">{error}</p>}
		</div>
	);
};

interface SignInProps {
	csrfToken: string;
}

const SignInPage: NextPage<SignInProps> = ({ csrfToken }) => {
	const [authError, setAuthError] = useState<string | null>(null);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		setAuthError(null);
		const result = await signIn('credentials', {
			redirect: false,
			email: data.email,
			password: data.password,
		});

		if (result?.error) {
			setAuthError('Неверный email или пароль. Попробуйте снова.');
		} else if (result?.ok) {
			window.location.href = '/';
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800">С возвращением!</h1>
					<p className="mt-2 text-gray-500">Войдите, чтобы продолжить</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}
					  className="space-y-4">
					<input name="csrfToken"
						   type="hidden"
						   defaultValue={csrfToken} />

					<InputField
						label="Email"
						id="email"
						type="email"
						placeholder="you@example.com"
						icon={<FiMail />}
						error={errors.email?.message}
						register={register('email')}
						autoComplete="email"
					/>

					<InputField
						label="Пароль"
						id="password"
						type={isPasswordVisible ? 'text' : 'password'}
						placeholder="••••••••"
						icon={<FiLock />}
						error={errors.password?.message}
						register={register('password')}
						autoComplete="current-password"
					>
						<button
							type="button"
							onClick={() => setIsPasswordVisible(!isPasswordVisible)}
							className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
							aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
						>
							{isPasswordVisible ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
						</button>
					</InputField>

					{authError && <p className="text-center text-red-600">{authError}</p>}

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full py-3 px-4 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200"
					>
						{isSubmitting ? 'Вход...' : 'Войти'}
					</button>
				</form>

				<div className="text-sm text-center text-gray-500">
					<a href="#"
					   className="font-medium text-blue-600 hover:text-blue-500">
						Забыли пароль?
					</a>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getSession(context);

	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	const csrfToken = await getCsrfToken(context);

	return {
		props: {
			csrfToken: csrfToken || '',
		},
	};
}
