import { trpc } from '@/shared/api';

type JoinEventButtonProps = {
	eventId: number;
};

export const JoinEventButton = ({ eventId }: JoinEventButtonProps) => {
	const mutation = trpc.event.join.useMutation({
		onSuccess: (data) => {
			console.log(`Присоединение к событию создано: ${data.user.email}, Событие: ${data.event.title}`);
		},
		onError: (error) => {
			console.error('Ошибка при присоединении к событию (tRPC):', error.message);
		},
	});

	const handleClick = () => {
		mutation.mutate({ id: eventId });
	};

	return (
		<button
			className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm"
			onClick={handleClick}
			disabled={mutation.isPending} // Кнопка неактивна во время запроса
		>
			{mutation.isPending ? 'Присоединяемся...' : 'Присоединиться'}
		</button>
	);
};