import { useState } from 'react';
import { useRouter } from 'next/router';
import { EventForm } from '@/features/event-form';
import { Alert } from '@/components';
import { trpc } from '@/shared/api';
import { PATH } from '@/shared/path';
import type { CreateEventInput } from '@/shared/api/';
import { EVENT_MODE } from '@/shared/types';

export default function CreateEvent() {
	const router = useRouter();
	const [mutationError, setMutationError] = useState<string | null>(null);
	const { mutate } = trpc.event.create.useMutation();

	const handleSubmitCreate = (data: CreateEventInput) => {
		setMutationError(null);
		mutate(data, {
			onSuccess: (createdEvent) => {
				console.log(`Событие создано: ${createdEvent.title} на дату ${createdEvent.eventDate.toLocaleDateString()}`);
				router.push(PATH.EVENTS.ID(createdEvent.id)).then(r => r);
			},
			onError: (error) => {
				console.error('Ошибка при создании события:', error);
				setMutationError(error.message);
			},
		});
	};
	return (
		<div className="mx-auto max-w-4xl space-y-4">
			{mutationError && <Alert onClose={() => setMutationError(null)}>{mutationError}</Alert>}
			<EventForm mode={EVENT_MODE.CREATE}
					   onSubmit={handleSubmitCreate}
			/>
		</div>
	);
}
