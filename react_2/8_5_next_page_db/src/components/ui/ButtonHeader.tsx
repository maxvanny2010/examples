'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useLogout } from '@/shared/contexts';
import { Session } from 'next-auth';
import { PATH } from '@/shared/path';

type ButtonHeaderProps = {
	session: Session | null;
};

export const ButtonHeader = ({ session }: ButtonHeaderProps) => {
	const router = useRouter();
	const { startLogout } = useLogout();

	const handleLogin = async () => {
		await router.push(PATH.AUTH.SIGNIN);
	};

	const handleLogout = async () => {
		startLogout();
		await signOut({ redirect: false });
		await router.push(PATH.HOME.ROOT);
	};

	return (
		<div className="flex items-center gap-2">
			{session?.user ? (
				<>
          <span className="text-black drop-shadow-sm">
            {session.user.name}
          </span>
					<button
						className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm shadow-lg"
						onClick={handleLogout}
					>
						Выйти
					</button>
				</>
			) : (
				<button
					className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm shadow-lg"
					onClick={handleLogin}
				>
					Войти
				</button>
			)}
		</div>
	);
};
