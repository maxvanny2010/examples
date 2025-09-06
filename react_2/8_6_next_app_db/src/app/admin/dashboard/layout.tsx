'use client';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { ROLES } from '@/shared/types';
import { CardForbidden, CardUnauthorized } from '@/entities/event';
import { SkeletonUsers } from '@/entities/user/skeletons';

interface DashboardLayoutProps {
	children: ReactNode;
	modal: ReactNode;
}

export default function DashboardLayout({ children, modal }: DashboardLayoutProps) {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <SkeletonUsers />;
	}

	if (!session) {
		return <CardUnauthorized />;
	}

	if (session.user.role !== ROLES.ADMIN) {
		return <CardForbidden />;
	}

	return (
		<>
			<div className="min-h-screen bg-gray-50">
				<main className="p-6">{children}</main>
			</div>
			{modal}
		</>
	);
}
