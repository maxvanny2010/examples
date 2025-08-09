import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Inputs {
	title: string;
	description: string;
	date: string;
}

export default function CreateEventForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
		setError,
		clearErrors,
	} = useForm<Inputs>({
		mode: 'onBlur',
		defaultValues: {
			title: '',
			description: '',
			date: '',
		},
	});

	const descriptionValue = watch('description');

	const [descriptionLettersCount, setDescriptionLettersCount] = useState(0);
	const [descriptionTooLong, setDescriptionTooLong] = useState(false);

	const countLetters = useCallback((text: string) => {
		const lettersAndDigitsOnly = text.replace(/[^а-яА-Яa-zA-ZёЁ0-9]/g, '');
		return lettersAndDigitsOnly.length;
	}, []);

	useEffect(() => {
		const count = countLetters(descriptionValue || '');
		setDescriptionLettersCount(count);
		setDescriptionTooLong(count > 300);
		if (count > 300) {
			setError('description', { type: 'maxLength', message: 'Описание слишком длинное (макс 300 символов).' });
		} else {
			clearErrors('description');
		}
	}, [descriptionValue, countLetters, setError, clearErrors]);

	const onSubmit = (data: Inputs) => {
		if (descriptionTooLong) return; //проверка

		console.log(`Создано событие: ${data.title} на дату ${data.date}`);
	};

	const onReset = () => {
		reset();
		setDescriptionLettersCount(0);
		setDescriptionTooLong(false);
	};

	return (
		<div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
			<h1 className="text-4xl font-semibold text-gray-900 mb-2">Форма создания события.</h1>

			<form onSubmit={handleSubmit(onSubmit)}
				  noValidate>
				{/* Название */}
				<div className="mb-6">
					<label
						htmlFor="title"
						className="block text-sm font-semibold text-gray-900 mb-2"
						title="Title"
						id="title-label"
					>
						Название
					</label>
					<input
						id="title"
						{...register('title', { required: 'Поле названия не может быть пустым.' })}
						autoComplete="off"
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900
              outline-1 outline-gray-300
              placeholder:text-gray-400
              focus:outline-2 focus:outline-indigo-600
              ${errors.title ? 'outline-red-600' : ''}`}
						aria-describedby={errors.title ? 'title-error' : undefined}
						aria-invalid={!!errors.title}
					/>
					{errors.title && (
						<p className="mt-1 text-xs text-red-600"
						   id="title-error">
							{errors.title.message}
						</p>
					)}
				</div>

				{/* Описание */}
				<div className="mb-6">
					<label htmlFor="description"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Описание
					</label>
					<textarea
						id="description"
						{...register('description')}
						rows={6}
						maxLength={2000}
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900
              outline-1 outline-gray-300
              placeholder:text-gray-400
              focus:outline-2 focus:outline-indigo-600
              ${descriptionTooLong ? 'outline-red-600' : ''}`}
						placeholder="Опишите событие"
						aria-describedby="description-help"
					/>
					<p
						className={`mt-1 text-sm ${descriptionTooLong ? 'text-red-600' : 'text-gray-600'}`}
						id="description-help"
					>
						Напишите несколько предложений о предстоящем событии. <span>{descriptionLettersCount} / 300 символов</span>
					</p>
					{errors.description && (
						<p className="mt-1 text-xs text-red-600"
						   id="description-error">
							{errors.description.message}
						</p>
					)}
				</div>

				{/* Дата */}
				<div className="mb-6">
					<label htmlFor="date"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Дата проведения
					</label>
					<input
						id="date"
						type="date"
						{...register('date')}
						className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
						aria-describedby="date-help"
					/>
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
						onClick={onReset}
						className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white text-shadow font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 shadow-lg transition"
					>
						Отмена
					</button>
				</div>
			</form>
		</div>
	);
}
