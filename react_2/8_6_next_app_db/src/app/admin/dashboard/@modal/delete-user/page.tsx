'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserDeleteModal } from '@/shared/ui';
import { trpc } from '@/shared/api';

export default function DeleteUserModal() {
	const router = useRouter();
	const params = useSearchParams();

	const id = params.get('id');
	const name = params.get('name');

	const deleteUser = trpc.admin.delete.useMutation({
		onSuccess: () => router.back(),
	});

	if (!id || !name) return null;

	return (
		<UserDeleteModal
			name={name}
			onCancel={() => router.back()}
			onConfirm={() => deleteUser.mutate({ id: Number(id) })}
		/>
	);
}
