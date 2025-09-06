'use client';
import { useRouter } from 'next/navigation';
import { UserDeleteModal } from '@/shared/ui';
import { PATH } from '@/shared/path';
import { trpc } from '@/shared/api';
import { useSession } from 'next-auth/react';
import { ROLES } from '@/shared/types';

interface DeleteUserModalProps {
	id: string;
	name: string;
}

export default function DeleteUserModal({ id, name }: DeleteUserModalProps) {
	const router = useRouter();
	const { data: session } = useSession();

	const { refetch } = trpc.admin.getAll.useQuery(
		undefined,
		{ enabled: session?.user?.role === ROLES.ADMIN },
	);

	const deleteUser = trpc.admin.delete.useMutation({
		onSuccess: () => {
			router.push(PATH.ADMIN.DASHBOARD);
			refetch().then(() => {
			});

		},
	});

	if (!id || !name) return null;

	return (
		<UserDeleteModal
			name={name}
			onCancel={() => router.push(PATH.ADMIN.DASHBOARD)}
			onConfirm={() => deleteUser.mutate({ id: Number(id) })}
		/>
	);
}
