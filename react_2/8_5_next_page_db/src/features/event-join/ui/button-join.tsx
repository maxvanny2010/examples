import { trpc } from '@/shared/api';

type JoinEventButtonProps = {
	eventId: number;
	isJoined: boolean;
};

const EVENT_ACTIONS = {
	JOIN: 'join',
	LEAVE: 'leave',
} as const;

const BUTTON_TEXTS = {
	JOIN: { text: 'Присоединиться', pendingText: 'Присоединяемся...' },
	LEAVE: { text: 'Отписаться', pendingText: 'Отписываемся...' },
} as const;
type EventAction = typeof EVENT_ACTIONS[keyof typeof EVENT_ACTIONS];

export const JoinEventButton = ({ eventId, isJoined }: JoinEventButtonProps) => {
	const utils = trpc.useUtils();

	const action: EventAction = isJoined ? EVENT_ACTIONS.LEAVE : EVENT_ACTIONS.JOIN;
	const newState = !isJoined;

	const mutation = trpc.event[action].useMutation({
		onMutate: async ({ id }) => {
			await utils.event.findMany.cancel();
			const previousData = utils.event.findMany.getData();

			utils.event.findMany.setData(undefined, (old) =>
				old?.map((ev) =>
					ev.id === id ? { ...ev, isJoined: newState } : ev,
				) ?? old,
			);

			return { previousData };
		},
		onError: (_err, _vars, ctx) => {
			if (ctx?.previousData) {
				utils.event.findMany.setData(undefined, ctx.previousData);
			}
		},
		onSettled: () => {
			utils.event.findMany.invalidate().then(r => r);
		},
	});

	const btnConfig = isJoined ? BUTTON_TEXTS.LEAVE : BUTTON_TEXTS.JOIN;
	const btnBg = isJoined ? 'bg-red-600 hover:bg-red-700' : 'bg-black hover:bg-gray-800';

	return (
		<button
			className={`${btnBg} text-white px-3 py-1 rounded text-sm cursor-pointer`}
			onClick={() => mutation.mutate({ id: eventId })}
			disabled={mutation.isPending}
		>
			{mutation.isPending ? btnConfig.pendingText : btnConfig.text}
		</button>
	);
};
