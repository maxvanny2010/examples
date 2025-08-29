'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import ButtonHeader from './ButtonHeader';
import { useUserRole } from '@/server/roles';
import { AiOutlineHome } from 'react-icons/ai';
import { PATH } from '@/shared/path';

interface LayoutProps {
	children: ReactNode;
	eventAuthorId?: number;
}

export const Layout = ({ children, eventAuthorId }: LayoutProps) => {
	const user = useUserRole();

	return (
		<div className="min-h-screen flex flex-col">
			<header className="p-4 bg-white shadow-md flex justify-between items-center">
				<Link href={PATH.HOME.ROOT}
					  className="text-2xl text-gray-700 hover:text-gray-900">
					<AiOutlineHome />
				</Link>
				<ButtonHeader user={user}
							  eventAuthorId={eventAuthorId} />
			</header>
			<main className="flex-1 p-4">{children}</main>
		</div>
	);
};
