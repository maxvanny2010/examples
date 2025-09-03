'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PATH } from '@/shared/path';
import { MESSAGES } from '@/shared/util';
import { InputField } from '@/shared/ui';
import { LoginFormData, loginSchema } from '@/shared/schema';

export default function SignInPage() {
	const [authError, setAuthError] = useState<string | null>(null);
	const [csrfToken, setCsrfToken] = useState('');
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const { data: session } = useSession();

	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
	});

	useEffect(() => {
		getCsrfToken().then(token => setCsrfToken(token || ''));
		if (session) window.location.href = PATH.HOME.ROOT;
	}, [session]);

	const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
		setAuthError(null);
		const result = await signIn('credentials', { redirect: false, email: data.email, password: data.password });
		if (result?.error) setAuthError(MESSAGES.USER_PASSWORD_NOT_FOUND);
		else if (result?.ok) window.location.href = PATH.HOME.ROOT;
	};

	return (
		<div className="flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800">Welcome back!</h1>
					<p className="mt-2 text-gray-500">Log in to continue.</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}
					  className="space-y-4">
					<input type="hidden"
						   name="csrfToken"
						   value={csrfToken} />

					<InputField label="Email"
								id="email"
								type="email"
								placeholder="you@example.com"
								icon={<FiMail />}
								error={errors.email?.message}
								register={register('email')}
								autoComplete="email" />

					<InputField label="Password"
								id="password"
								type={isPasswordVisible ? 'text' : 'password'}
								placeholder="••••••••"
								icon={<FiLock />}
								error={errors.password?.message}
								register={register('password')}
								autoComplete="current-password">
						<button type="button"
								onClick={() => setIsPasswordVisible(!isPasswordVisible)}
								className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
								aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}>
							{isPasswordVisible ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
						</button>
					</InputField>

					{authError && <p className="text-center text-red-600">{authError}</p>}

					<button type="submit"
							disabled={isSubmitting}
							className="w-full py-3 px-4 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200">
						{isSubmitting ? 'Signing...' : 'Sign in'}
					</button>
				</form>

				<div className="text-sm text-center text-gray-500">
					<Link href={PATH.AUTH.REGISTER}
						  className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</Link>
				</div>
			</div>
		</div>
	);
}
