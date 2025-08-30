import { useRouter } from 'next/router';
import { useState } from 'react';
import { trpc } from '@/shared/api';
import { PATH } from '@/shared/path';
import { Alert } from '@/shared/ui';
import { EVENT_MODE } from '@/shared/types';
import { EventForm } from '@/features/event-form';
import type { CreateEventInput } from '@/shared/api';

export default function CreateEvent() {
	const router = useRouter();
	const [mutationError, setMutationError] = useState<string | null>(null);
	const { mutate } = trpc.event.create.useMutation();

	const handleSubmitCreate = (data: CreateEventInput) => {
		setMutationError(null);
		mutate(data, {
			onSuccess: (createdEvent) => {
				console.log(`Event created: ${createdEvent.title} at date: ${createdEvent.eventDate.toLocaleDateString()}`);
				router.push(PATH.EVENTS.ID(createdEvent.id)).then(r => r);
			},
			onError: (error) => {
				console.error('Error creating event: ', error);
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
