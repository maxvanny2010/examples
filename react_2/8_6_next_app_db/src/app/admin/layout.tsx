'use client';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { ForbiddenCard, UnauthorizedCard } from '@/app/events/components';
import { ROLES } from '@/shared/types';

interface AdminLayoutProps {
	children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
	const { data: session } = useSession();

	if (!session) return <UnauthorizedCard />;
	if (session.user.role !== ROLES.ADMIN) return <ForbiddenCard />;

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Здесь можно добавить админскую шапку или боковую панель */}
			<main className="p-6">{children}</main>
		</div>
	);
}
