import React, { ReactNode } from 'react';
import Link from 'next/link';
import { pathImage, sizeImage } from '@/util';

type EventCardProps = {
	id: number;
	title: string;
	description: string | null;
	createdAt: Date;
	action?: ReactNode;
};

const formatCardDate = (date: Date): string => {
	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}).format(date).replace(' г.', '');
};

export const EventCard = ({ id, title, description, createdAt, action }: EventCardProps) => {
	const imageUrl = `${pathImage}${id}${sizeImage}`;

	return (
		// 1. Корневым элементом теперь является <article>.
		// класс `group`, чтобы эффекты при наведении работали для всей карточки.
		<article
			className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden max-w-sm w-full"
		>
			{/* Изображение реагирует на наведение курсора на карточку */}
			<div className="relative overflow-hidden h-48">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
			</div>

			<div className="p-5 flex flex-col flex-grow">
				<header>
					<time dateTime={createdAt.toISOString()}
						  className="text-xs text-slate-500 font-medium uppercase tracking-wider">
						{formatCardDate(createdAt)}
					</time>
					{/* Заголовок реагирует на наведение на карточку */}
					<h2 className="mt-2 text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">
						{title}
					</h2>
				</header>

				<p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-grow">
					{description || 'Описание для этого мероприятия скоро появится.'}
				</p>

				{/* 2. Футер содержит явную кнопку-ссылку */}
				<footer className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
					{/* Слот для дополнительных кнопок (например, "Редактировать") */}
					{action}

					{/* 3. Компонент Link применяется только к кнопке */}
					<Link
						href={`/events/${id}`}
						className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
					>
						Подробнее
						{/* Скрытый текст для улучшения доступности */}
						<span className="sr-only"> о мероприятии {title}</span>
					</Link>
				</footer>
			</div>
		</article>
	);
};