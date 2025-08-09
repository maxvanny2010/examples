import React from 'react';
import Link from 'next/link';

type EventCardProps = {
	id: number;
	title: string;
	description: string | null;
	createdAt: Date;
};

export const EventCard = ({ id, title, description, createdAt }: EventCardProps) => {
	const randomImg = `https://picsum.photos/seed/${id}/300/240`;

	return (
		<div className="flex flex-col bg-white rounded-lg overflow-hidden w-72 h-60 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
			{/* Фото */}
			<div className="h-32 w-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
				<img src={randomImg}
					 alt={title}
					 className="w-full h-full object-cover" />
			</div>

			{/* Контент */}
			<div className="p-4 flex flex-col justify-between flex-1">
				<div className="flex justify-between items-start">
					<h2 className="text-lg text-black text-shadow font-bold truncate">{title}</h2>
					<span className="text-xs text-gray-500">{createdAt.toLocaleDateString()}</span>
				</div>
				<p className="text-sm text-gray-700 line-clamp-2">{description}</p>

				{/* Кнопки */}
				<div className="flex gap-2 mt-2">
					<button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm">
						Присоединиться
					</button>
					<Link
						href={`events/${id}`}
						className="bg-white border border-black text-black px-3 py-1 rounded hover:bg-gray-100 text-sm"
					>
						Подробнее
					</Link>
				</div>
			</div>
		</div>
	);
};
