import { RouterOutput } from '@/shared/api';
import type { FC } from 'react';

// --- Типы и Вспомогательные утилиты ---

type EventDetailProps = {
	data: NonNullable<RouterOutput['event']['findUnique']>;
	image: string;
};

/**
 * Безопасно форматирует дату для отображения.
 * Использует Intl.DateTimeFormat для корректной локализации.
 * @param date - Дата в виде строки или объекта Date.
 * @returns Отформатированная строка даты или сообщение по умолчанию.
 */
const formatEventDate = (date: Date | string | null | undefined): string => {
	if (!date) {
		return 'Дата не указана';
	}
	try {
		// Intl.DateTimeFormat - стандарт для работы с датами в разных языках
		return new Intl.DateTimeFormat('ru-RU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}).format(new Date(date as string));
	} catch (error) {
		console.error('Invalid date provided:', error);
		return 'Некорректный формат даты';
	}
};

// --- Компоненты-иконки (в реальном проекте лучше использовать библиотеку типа Heroicons) ---

const CalendarIcon: FC = () => (
	<svg xmlns="http://www.w3.org/2000/svg"
		 className="h-5 w-5"
		 fill="none"
		 viewBox="0 0 24 24"
		 stroke="currentColor"
		 strokeWidth={2}>
		<path strokeLinecap="round"
			  strokeLinejoin="round"
			  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
	</svg>
);

const UsersIcon: FC = () => (
	<svg xmlns="http://www.w3.org/2000/svg"
		 className="h-6 w-6"
		 fill="none"
		 viewBox="0 0 24 24"
		 stroke="currentColor"
		 strokeWidth={2}>
		<path strokeLinecap="round"
			  strokeLinejoin="round"
			  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a4 4 0 110-5.292" />
	</svg>
);

// --- Основной компонент ---

export const EventDetail = ({ data, image }: EventDetailProps) => {
	const { title, description, eventDate, participations } = data;
	const formattedDate = formatEventDate(eventDate);

	return (
		// 1. Основной контейнер с нейтральным фоном для контраста
		<main className="min-h-screen bg-slate-50 font-sans antialiased">
			<div className="container mx-auto px-4 py-12 sm:py-16">
				{/* 2. Используем <article> для семантической ценности контента */}
				<article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-5">

						{/* Левая колонка: Изображение */}
						<div className="lg:col-span-2">
							<img
								src={image}
								alt={`Обложка мероприятия: ${title}`}
								className="w-full h-64 lg:h-full object-cover" // object-cover предотвращает искажение
							/>
						</div>

						{/* Правая колонка: Детали */}
						<div className="lg:col-span-3 p-8 md:p-12 flex flex-col gap-8">

							{/* 3. <header> для заголовка и мета-информации */}
							<header className="flex flex-col gap-4">
								<h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
									{title}
								</h1>
								<div className="flex items-center gap-2 text-indigo-600 font-semibold">
									<CalendarIcon />
									{/* Тег <time> улучшает семантику для поисковиков и скрин-ридеров */}
									<time dateTime={eventDate ? new Date(eventDate as unknown as string).toISOString() : undefined}>
										{formattedDate}
									</time>
								</div>
							</header>

							{/* Описание события */}
							{description && (
								<p className="text-lg text-slate-600 leading-relaxed">
									{description}
								</p>
							)}

							{/* 4. Секция участников для лучшей структуры документа */}
							<section aria-labelledby="participants-heading">
								<div className="flex items-center gap-3 mb-6">
									<UsersIcon />
									<h2 id="participants-heading"
										className="text-2xl font-bold text-slate-900">
										Участники ({participations.length})
									</h2>
								</div>

								{participations.length > 0 ? (
									<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										{participations.map(({ user }) => (
											<li key={user.id}
												className="flex items-center gap-3 bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition-colors duration-200">
												{/* Заглушка для аватара */}
												<div className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold shrink-0">
													{user.name ? user.name.charAt(0).toUpperCase() : '👤'}
												</div>
												<span className="font-medium text-slate-800 truncate">{user.name || 'Анонимный участник'}</span>
											</li>
										))}
									</ul>
								) : (
									<div className="text-center py-8 px-4 bg-slate-100 rounded-lg border border-dashed">
										<p className="text-slate-500">
											Пока никто не присоединился. <br /> Станьте первым!
										</p>
									</div>
								)}
							</section>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
};