'use client';

import { useParams, useSearchParams } from 'next/navigation';
import DeleteUserModal from '@/app/admin/dashboard/delete-user-modal';

export default function Page() {
	const params = useParams<{ id: string }>();
	const searchParams = useSearchParams();

	const id = params.id;
	const name = searchParams.get('name') ?? '';

	return <DeleteUserModal id={id}
							name={name} />;
}
