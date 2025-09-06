'use client';
import { trpc } from '@/shared/api';
import { useSession } from 'next-auth/react';
import { ROLES } from '@/shared/types';
import { CardForbidden, CardUnauthorized } from '@/entities/event';
import { SkeletonUsers } from '@/entities/user/skeletons';
import { UsersTable } from '@/entities/user';
import { PATH } from '@/shared/path';

export default function AdminDashboard() {
	const { data: session } = useSession();

	const { data: users, isLoading } = trpc.admin.getAll.useQuery(undefined, {
		enabled: session?.user?.role === ROLES.ADMIN,
	});

	if (!session) return <CardUnauthorized />;
	if (session.user.role !== ROLES.ADMIN) return <CardForbidden />;
	if (isLoading) return <SkeletonUsers />;

	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-6 text-black text-center">Users</h2>

			<UsersTable
				users={users ?? []}
				onDeleteAction={(id, name) => {
					return `${PATH.ADMIN.DASHBOARD}/delete/${id}?name=${encodeURIComponent(name)}`;
				}}
			/>

		</div>
	);
};