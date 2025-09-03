'use client';

import {EventHeader} from './EventHeader';
import {EventParticipants} from './EventParticipants';
import {EventImage} from './EventImage';
import {RouterOutput} from '@/shared/schema';

interface Props {
    event: NonNullable<RouterOutput['event']['findUnique']>;
    eventId: string;
}

export const EventDetailClient = ({event, eventId}: Props) => {
    return (
        <main className="min-h-screen bg-slate-50 font-sans antialiased">
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        <EventImage imageId={eventId}
                                    title={event.title}/>
                        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col gap-8">
                            <EventHeader title={event.title}
                                         eventDate={event.eventDate ? event.eventDate.toISOString() : undefined}/>
                            {event.description && (
                                <p className="text-lg text-slate-600 leading-relaxed">{event.description}</p>
                            )}
                            <EventParticipants participations={event.participations}/>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};
