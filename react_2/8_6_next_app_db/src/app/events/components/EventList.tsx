'use client';

import { CardEvent } from './CardEvent';
import { Event } from '@/shared/types/event';
import { ButtonEventJoin } from './ButtonEventJoin';

type Props = {
	events: Event[];
	isAuthenticated: boolean;
};

export const EventList = ({ events, isAuthenticated }: Props) => {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{events.map(event => (
				<li key={event.id}
					className="fade-in">
					<CardEvent
						{...event}
						action={
							isAuthenticated ? (
								<ButtonEventJoin eventId={event.id}
												 isJoined={event.isJoined} />
							) : null
						}
					/>
				</li>
			))}
		</ul>
	);
};
