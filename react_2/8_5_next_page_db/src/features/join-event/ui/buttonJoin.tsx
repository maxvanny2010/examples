import { trpc } from '@/shared/api';

type JoinEventButtonProps = {
	eventId: number;
};

export const JoinEventButton = ({ eventId }: JoinEventButtonProps) => {
	const utils = trpc.useUtils();

	const mutation = trpc.event.join.useMutation({
		// Оптимистичное обновление перед отправкой
		onMutate: async ({ id: eventId }) => {
			await utils.event.findMany.cancel(); // отменяем запросы, чтобы не перетерли кэш

			const previousData = utils.event.findMany.getData();// a before state

			utils.event.findMany.setData(undefined, (old) => {
				if (!old) return old;
				return old.map((ev) =>
					ev.id === eventId ? { ...ev, isJoined: true } : ev,
				);
			});

			// вернём старые данные, чтобы откатить в случае ошибки
			return { previousData };
		},

		// Если ошибка — откатываем изменения
		onError: (_err, _variables, context) => {
			if (context?.previousData) {// is a before state
				utils.event.findMany.setData(undefined, context.previousData);
			}
		},

		// После успеха можно дополнительно обновить
		onSuccess: (data) => {
			console.log(
				`✅ Присоединение: ${data.user.email}, Событие: ${data.event.title}`,
			);
		},

		// После завершения запроса — можно обновить/инвалидировать
		onSettled: () => { // at the end of call all time calling for a sync with server
			utils.event.findMany.invalidate().then(r => r);
		},
	});

	return (
		<button
			className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm"
			onClick={() => mutation.mutate({ id: eventId })}
			disabled={mutation.isPending}
		>
			{mutation.isPending ? 'Присоединяемся...' : 'Присоединиться'}
		</button>
	);
};
