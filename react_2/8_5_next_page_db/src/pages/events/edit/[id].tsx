import {use} from 'react';
import {MESSAGES} from '@/shared/util';
import {StateError} from '@/entities/event/ui/state';
import {EditEventClient} from '@/entities/event';

export default function EditPage({
                                     params,
                                 }: {
    params: Promise<{ id: string }>
}) {
    const {id: idParam} = use(params);
    const id = Number(idParam);

    if (Number.isNaN(id)) {
        return <StateError message={MESSAGES.EVENT_NO_ID}/>;
    }

    return <EditEventClient id={id}/>;
}
