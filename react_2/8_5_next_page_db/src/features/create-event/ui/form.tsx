import React, { useCallback, useEffect, useState } from 'react';

export default function CreateEventForm() {
	const [title, setTitle] = useState('');
	const [titleTouched, setTitleTouched] = useState(false);
	const [description, setDescription] = useState('');
	const [descriptionWords, setDescriptionWords] = useState(0);
	const [descriptionTooLong, setDescriptionTooLong] = useState(false);
	const [date, setDate] = useState('');

	const countLetters = useCallback((text: string) => {
		// Удаляем все пробелы и не буквенные символы, оставляем только буквы
		const lettersAndDigitsOnly = text.replace(/[^а-яА-Яa-zA-ZёЁ0-9]/g, '');
		console.log('Letters counted:', lettersAndDigitsOnly.length);
		return lettersAndDigitsOnly.length;

	}, []);


	const titleError = titleTouched && title.trim() === '';

	useEffect(() => {
		const number = countLetters(description);
		setDescriptionWords(number);
		setDescriptionTooLong(number > 300);
		console.log('Letters counted:', number);
	}, [description]);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setTitleTouched(true);
		if (title.trim() === '') return;
		if (descriptionTooLong) return;

		alert(`Создано событие: ${title} на дату ${date}`);
	};

	const onReset = () => {
		setTitle('');
		setTitleTouched(false);
		setDescription('');
		setDescriptionWords(0);
		setDescriptionTooLong(false);
		setDate('');
	};

	const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value);
		console.log('Описание:', e.target.value);
	};

	return (
		<div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
			{/* Заголовок */}
			<h1 className="text-4xl font-semibold text-gray-900 mb-2">Форма создания события.</h1>

			<form onSubmit={onSubmit}
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
						name="title"
						type="text"
						autoComplete="off"
						value={title}
						onChange={e => setTitle(e.target.value)}
						onBlur={() => setTitleTouched(true)}
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900
              outline-1 outline-gray-300
              placeholder:text-gray-400
              focus:outline-2 focus:outline-indigo-600
              ${titleError ? 'outline-red-600' : ''}`}
						aria-describedby={titleError ? 'title-error' : undefined}
						aria-invalid={titleError}
					/>
					{titleError && (
						<p className="mt-1 text-xs text-red-600"
						   id="title-error">
							Поле названия не может быть пустым.
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
						name="description"
						rows={6}
						maxLength={2000}
						value={description}
						onChange={onChangeDescription}
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
						Напишите несколько предложений о предстоящем
						событии. <span>{descriptionWords} / 300 символов</span>
					</p>
				</div>

				{/* Дата */}
				<div className="mb-6">
					<label htmlFor="date"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Дата проведения
					</label>
					<input
						id="date"
						name="date"
						type="date"
						value={date}
						onChange={e => setDate(e.target.value)}
						className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
						aria-describedby="date-help"
					/>
				</div>

				<div className="flex flex-col gap-3">
					{/* Кнопки */}
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
