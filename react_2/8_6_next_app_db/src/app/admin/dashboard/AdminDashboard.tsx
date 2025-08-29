'use client'
import { trpc } from '@/shared/api';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { ForbiddenCard, UnauthorizedCard } from '@/app/events/components';
import { UserDeleteModal } from '@/components/ui';
import { ROLES } from '@/shared/types';
import { SkeletonUsers } from '@/app/entities/skeletons';
import { UsersTable } from '@/app/users/components';

const AdminDashboard = () => {
	const { data: session } = useSession();
	const { data: users, refetch, isLoading } = trpc.user.adminOnly.useQuery(
		undefined,
		{ enabled: session?.user?.role === ROLES.ADMIN },
	);

	const deleteUser = trpc.user.delete.useMutation({
		onSuccess: () => {
			refetch().then(r => r);
			setSelectedUser(null);
		},
	});

	const [selectedUser, setSelectedUser] = useState<null | { id: string | number; name: string }>(null);

	if (!session) return <UnauthorizedCard />;
	if (session.user.role !== ROLES.ADMIN) return <ForbiddenCard />;
	if (isLoading) return <SkeletonUsers />;

	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-6 text-black text-center">Users</h2>

			<UsersTable
				users={users ?? []}
				onDelete={(id, name) => setSelectedUser({ id, name })}
			/>

			{/* Модалка подтверждения */}
			{selectedUser && (
				<UserDeleteModal
					name={selectedUser.name}
					onCancel={() => setSelectedUser(null)}
					onConfirm={() => deleteUser.mutate({ id: Number(selectedUser.id) })}
				/>
			)}
		</div>
	);
};

export default AdminDashboard;
