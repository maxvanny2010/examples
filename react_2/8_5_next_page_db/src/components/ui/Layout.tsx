import { ReactNode } from 'react';
import Link from 'next/link';
import ButtonHeader from './ButtonHeader';
import { useUserRole } from '@/server/roles';
import { AiOutlineHome } from 'react-icons/ai';
import { PATH } from '@/shared/path';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const user = useUserRole();
	console.log(user);
	return (
		<div className="min-h-screen flex flex-col">
			<header className="p-4 bg-white shadow-md  bg-gray-100 p-4 flex justify-between items-center">
				<div>
					<Link href={PATH.HOME.ROOT}
						  className="text-2xl text-gray-700 hover:text-gray-900 text-shadow lg">
						<AiOutlineHome />
					</Link>
				</div>
				<ButtonHeader user={user} />
			</header>

			<main className="flex-1 p-4">{children}</main>
		</div>
	);
};
