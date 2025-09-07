'use client';
import { useParams, useRouter } from 'next/navigation';
import { trpc } from '@/shared/api';
import { PATH } from '@/shared/path';
import { MESSAGES } from '@/shared/util';
import { UserDeleteModal } from '@/shared/ui';

export default function DeleteEventModal() {
	const router = useRouter();
	const params = useParams<{ id: string }>();
	const id = params?.id;

	const deleteEvent = trpc.event.delete.useMutation();

	const { data: event, isLoading } = trpc.event.findUnique.useQuery({
		id: Number(id),
	}, {
		enabled: !!id,
	});

	const handleDelete = async () => {
		if (!id) return;
		try {
			await deleteEvent.mutateAsync({ id: Number(id) });
			router.back();
			setTimeout(() => {
				router.replace(PATH.HOME.ROOT);
			}, 10);
		} catch (err) {
			console.error(MESSAGES.EVENT_ERROR_DELETE, err);
			router.back();
		}
	};

	if (isLoading || !id || !event) {
		return null;
	}

	return (
		<UserDeleteModal
			name={event.title}
			onCancel={() => router.back()}
			onConfirm={handleDelete}
			isPending={deleteEvent.isPending}
		/>
	);
}
