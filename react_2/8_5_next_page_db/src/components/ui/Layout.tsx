'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { HeaderButton } from './HeaderButton';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';

type LayoutProps = {
	children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();
	const isHome = router.pathname === '/';

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="p-4 bg-white shadow-md flex justify-between items-center">
				{/* Home слева, только если не на главной */}
				<div>
					{!isHome && (
						<Link href="/"
							  className="text-2xl text-gray-700 hover:text-gray-900">
							<AiOutlineHome />
						</Link>
					)}
				</div>

				{/* Логин/логаут справа */}
				<div className="flex items-center gap-2">
					<HeaderButton />
				</div>
			</header>

			<main className="p-4">{children}</main>
		</div>
	);
};
