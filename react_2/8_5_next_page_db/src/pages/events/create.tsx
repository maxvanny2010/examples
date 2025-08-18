import { useState } from 'react';
import { useRouter } from 'next/router';
import { CreateEventForm, Inputs } from '@/features/create-event';
import { Alert } from '@/components';
import { trpc } from '@/shared/api';

export default function CreateEvent() {
	const router = useRouter();
	const [mutationError, setMutationError] = useState<string | null>(null);
	const { mutate } = trpc.event.create.useMutation();

	const handleSubmit = (data: Inputs) => {
		// setMutationError("Тестовая ошибка для проверки Alert");
		setMutationError(null); // Сбрасываем предыдущую ошибку перед новой попыткой
		mutate(data, {
			onSuccess: (createdEvent) => {
				console.log(`Событие создано: ${createdEvent.title} на дату ${createdEvent.eventDate.toLocaleDateString()}`);
				// УСПЕХ: перенаправляем на главную страницу
				router.push(`/events/${createdEvent.id}`).then(r => r);
			},
			onError: (error) => {
				console.error('Ошибка при создании события:', error);
				setMutationError(error.message);
			},
		});
	};

	return (
		<div className="mx-auto max-w-4xl space-y-4">
			{/* Блок для отображения ошибки */}
			{mutationError && (
				<Alert onClose={() => setMutationError(null)}>
					{mutationError}
				</Alert>
			)}
			<CreateEventForm onSubmit={handleSubmit} />
		</div>
	);
}
