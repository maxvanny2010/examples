import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateEventSchema } from '@/shared/api/schema';
import { useRouter } from 'next/router';

export type Inputs = z.infer<typeof CreateEventSchema>;

type CreateEventFormProps = {
	onSubmit: SubmitHandler<Inputs>;
};

export const CreateEventForm = ({ onSubmit }: CreateEventFormProps) => {
	const router = useRouter();

	const countLetters = useCallback((text: string) => {
		return text.replace(/[^а-яА-Яa-zA-ZёЁ0-9]/g, '').length;
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
		resolver: zodResolver(CreateEventSchema),
		defaultValues: {
			title: '',
			description: '',
			eventDate: new Date().toISOString().slice(0, 10),
		},
	});

	const descriptionValue = watch('description') || '';
	const lettersCount = countLetters(descriptionValue);

	const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
		// При необходимости можно преобразовать eventDate из строки в Date
		const eventDateISO = new Date(data.eventDate).toISOString();
		console.log('Дата как объект Date:', eventDateISO);

		// Можно передать дальше original data или с датой как Date
		const payload = {
			...data,
			eventDate: eventDateISO,
		};

		onSubmit(payload);
	};

	const handleCancel = () => {
		reset();
		router.push('/').then(r => r);
	};
	return (
		<div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
			<h1 className="text-4xl font-semibold text-gray-900 mb-2">Форма создания события.</h1>

			<form onSubmit={handleSubmit(onSubmitHandler)}
				  noValidate>
				{/* Название */}
				<div className="mb-6">
					<label htmlFor="title"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Название
					</label>
					<input
						id="title"
						{...register('title')}
						autoComplete="off"
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 ${
							errors.title ? 'outline-red-600' : ''
						}`}
						aria-invalid={!!errors.title}
					/>
					{errors.title && <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>}
				</div>

				{/* Описание */}
				<div className="mb-6">
					<label htmlFor="description"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Описание
					</label>
					<textarea
						id="description"
						{...register('description', {
							validate: (value) => countLetters(value || '') <= 300 || 'Описание слишком длинное (макс 300 символов).',
						})}
						rows={6}
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 ${
							errors.description ? 'outline-red-600' : ''
						}`}
						placeholder="Опишите событие"
					/>
					<p className={`mt-1 text-sm ${errors.description ? 'text-red-600' : 'text-gray-600'}`}>
						Напишите несколько предложений о событии. <span>{lettersCount} / 300 символов</span>
					</p>
					{errors.description && <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>}
				</div>

				{/* Дата */}
				<div className="mb-6">
					<label htmlFor="eventDate"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Дата проведения
					</label>
					<input
						id="eventDate"
						type="date"
						{...register('eventDate', {
							required: 'Поле даты не может быть пустым',
						})}
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 ${
							errors.eventDate ? 'outline-red-600' : ''
						}`}
					/>
					{errors.eventDate && <p className="mt-1 text-xs text-red-600">{errors.eventDate.message}</p>}
				</div>

				<div className="flex flex-col gap-3">
					<button
						type="submit"
						className="w-full rounded-md bg-amber-50 px-4 py-2 text-black font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition shadow-lg"
					>
						Создать
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 shadow-lg transition"
					>
						Отмена
					</button>
				</div>
			</form>
		</div>
	);
};
