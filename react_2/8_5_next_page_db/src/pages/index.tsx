import {trpc} from '@/shared/schema';
import {EventCard, EventCardSkeleton} from '@/entities/event';
import {JoinEventButton} from '@/features/event-join';
import {useSession} from 'next-auth/react';
import {FaCalendarAlt, FaFrown} from 'react-icons/fa';

export default function Home() {
    const {status} = useSession();
    const isAuthenticated = status === 'authenticated';
    const {data: events, isLoading, isError} = trpc.event.findMany.useQuery();

    const renderContent = () => {
        if (isLoading) {
            return (
                Array.from({length: 8}).map((_, index) => (
                    <li key={index}>
                        <EventCardSkeleton/>
                    </li>
                ))
            );
        }

        if (isError) {
            return (
                <div className="sm:col-span-2 lg:col-span-4 text-center py-10">
                    <p className="text-lg text-red-500 flex items-center justify-center gap-2">
                        <FaFrown/> An error occurred while loading events.
                    </p>
                    <p className="text-slate-500 mt-2">Please try refreshing the page.</p>
                </div>
            );
        }

        if (!events || events.length === 0) {
            return (
                <div className="sm:col-span-2 lg:col-span-4 text-center py-10">
                    <p className="text-lg text-slate-700 flex items-center justify-center gap-2">
                        <FaCalendarAlt/> No available events yet.
                    </p>
                    <p className="text-slate-500 mt-2">Check back later!</p>
                </div>
            );
        }

        return (
            events.map((event) => (
                <li key={event.id}
                    className="fade-in">
                    <EventCard
                        {...event}
                        action={
                            isAuthenticated ? (
                                <JoinEventButton eventId={event.id}
                                                 isJoined={event.isJoined}/>
                            ) : null
                        }
                    />
                </li>
            ))
        );
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-12">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Upcoming Events
                    </h1>
                    <p className="mt-2 text-lg text-slate-600">
                        Join our events and be at the heart of the action
                    </p>
                </header>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {renderContent()}
                </ul>
            </div>
        </main>
    );
}
