import { trpc } from '@/shared/api';
import { EventCard, EventCardSkeleton } from '@/entities/event';
import { JoinEventButton } from '@/features/event-join';
import { useSession } from 'next-auth/react';

export default function Home() {
	const { data: session, status } = useSession();
	const isAuthenticated = status === 'authenticated';
	const { data: events, isLoading, isError, refetch } = trpc.event.findMany.useQuery();
	const renderContent = () => {
		if (isLoading) {
			return (
				// Создаем массив из 8 элементов для отображения заглушек
				Array.from({ length: 8 }).map((_, index) => (
					<li key={index}>
						<EventCardSkeleton />
					</li>
				))
			);
		}

		if (isError) {
			return (
				<div className="sm:col-span-2 lg:col-span-4 text-center py-10">
					<p className="text-lg text-red-500">😔 Произошла ошибка при загрузке событий.</p>
					<p className="text-slate-500 mt-2">Пожалуйста, попробуйте обновить страницу.</p>
				</div>
			);
		}

		if (!events || events.length === 0) {
			return (
				<div className="sm:col-span-2 lg:col-span-4 text-center py-10">
					<p className="text-lg text-slate-700">🗓️ Пока нет доступных событий.</p>
					<p className="text-slate-500 mt-2">Загляните позже!</p>
				</div>
			);
		}

		return (
			events.map((event) => (
				<li key={event.id}
					className="fade-in"> {/* класс для анимации */}
					<EventCard
						{...event}
						action={
							isAuthenticated ? (
								<JoinEventButton eventId={event.id}
												 isJoined={event.isJoined} />
							) : null
						}
					/>
				</li>
			))
		);
	};

	return (
		// 3. семантический тег <main> и добавляем заголовок страницы
		<main className="min-h-screen bg-slate-50">
			<div className="container mx-auto px-4 py-12">
				<header className="mb-8 text-center">
					<h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
						Предстоящие события
					</h1>
					<p className="mt-2 text-lg text-slate-600">
						Присоединяйтесь к нашим мероприятиям и будьте в центре событий
					</p>
				</header>

				{/* 4. <ul> для семантически корректного списка */}
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{renderContent()}
				</ul>
			</div>
		</main>
	);
}