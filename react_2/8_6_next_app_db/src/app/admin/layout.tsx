'use client';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { ROLES } from '@/shared/types';
import { CardForbidden, CardUnauthorized } from '@/entities/event';

interface AdminLayoutProps {
	children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
	const { data: session } = useSession();

	if (!session) return <CardUnauthorized />;
	if (session.user.role !== ROLES.ADMIN) return <CardForbidden />;

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="p-6">{children}</main>
		</div>
	);
}
