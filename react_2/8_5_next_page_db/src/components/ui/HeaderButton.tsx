'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useLogout } from '@/shared/contexts';

export const HeaderButton = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const { startLogout } = useLogout();

	const handleLogin = async () => {
		await router.push('/auth/signin');
	};

	const handleLogout = async () => {
		startLogout(); // флаг, чтобы скрывать Forbidden
		await signOut({ redirect: false });
		await router.push('/');
	};

	return (
		<div className="flex items-center gap-2">
			{session?.user ? (
				<>
					<span className="text-black drop-shadow-sm">{session.user.name}</span>
					<button
						className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
						onClick={handleLogout}
					>
						Выйти
					</button>
				</>
			) : (
				<button
					className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm"
					onClick={handleLogin}
				>
					Войти
				</button>
			)}
		</div>
	);
};
