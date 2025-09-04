import { MESSAGES } from '@/shared/util';
import { StateError } from '@/entities/event/ui/state';
import { EditEventClient } from '@/entities/event';
import { useRouter } from 'next/router';

export default function EditPage() {
	const router = useRouter();

	// id может быть undefined | string | string[]
	const { id } = router.query;

	const numId =
		typeof id === 'string'
			? Number(id)
			: Array.isArray(id)
				? Number(id[0])
				: NaN;

	if (Number.isNaN(numId)) {
		return <StateError message={MESSAGES.EVENT_NO_ID} />;
	}

	return <EditEventClient id={numId} />;
}
