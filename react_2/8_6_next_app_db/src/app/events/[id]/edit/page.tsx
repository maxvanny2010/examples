import { use } from 'react';
import { MESSAGES } from '@/shared/util';
import { EditEventClient } from './EditEventClient';
import { StateError } from '@/entities/event/state';

export default function Page({
								 params,
							 }: {
	params: Promise<{ id: string }>
}) {
	const { id: idParam } = use(params);
	const id = Number(idParam);

	if (Number.isNaN(id)) {
		return <StateError message={MESSAGES.EVENT_NO_ID} />;
	}

	return <EditEventClient id={id} />;
}
