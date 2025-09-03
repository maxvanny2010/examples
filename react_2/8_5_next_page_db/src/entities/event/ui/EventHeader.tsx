'use client';

import {HiOutlineCalendar} from 'react-icons/hi';

interface Props {
    title: string;
    eventDate?: string | null;
}

export const EventHeader = ({title, eventDate}: Props) => {
    const formattedDate = eventDate
        ? new Intl.DateTimeFormat('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date(eventDate))
        : 'Date not provided';

    return (
        <header className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <HiOutlineCalendar className="h-5 w-5 text-current"/>
                <time dateTime={eventDate ? new Date(eventDate).toISOString() : undefined}>{formattedDate}</time>
            </div>
        </header>
    );
};
