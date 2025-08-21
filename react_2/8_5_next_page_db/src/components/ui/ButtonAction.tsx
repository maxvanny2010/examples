'use client';

import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { PATH } from '@/shared/path';
import { BUTTON_EVENT_TYPE, ButtonEventType } from '@/shared/types';

type ButtonEventActionProps = {
	session: Session | null;
	type: ButtonEventType;
	id?: string | number;
};

export const ButtonEventAction = ({ session, type, id }: ButtonEventActionProps) => {
	const router = useRouter();

	if (!session?.user) return null;

	const handleClick = async () => {
		switch (type) {
			case BUTTON_EVENT_TYPE.CREATE:
				await router.push(PATH.EVENTS.CREATE);
				break;
			case BUTTON_EVENT_TYPE.EDIT:
				if (!id) return;
				await router.push(PATH.EVENTS.EDIT(id));
				break;
			case BUTTON_EVENT_TYPE.DETAIL:
				if (!id) return;
				await router.push(PATH.EVENTS.ID(id));
				break;
		}
	};

	const colorClass =
		type === BUTTON_EVENT_TYPE.CREATE
			? 'bg-green-600 hover:bg-green-700'
			: type === BUTTON_EVENT_TYPE.EDIT
				? 'bg-blue-600 hover:bg-blue-700'
				: 'bg-gray-600 hover:bg-gray-700';

	const text =
		type === BUTTON_EVENT_TYPE.CREATE
			? 'Create Event'
			: type === BUTTON_EVENT_TYPE.EDIT
				? 'Edit Event'
				: 'View Event';

	return (
		<button
			className={`${colorClass} text-white px-3 py-1 rounded text-sm shadow-lg`}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};
