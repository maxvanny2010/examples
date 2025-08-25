import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateEventInput, CreateEventSchema, EditEventInput, EditEventSchema } from '@/shared/api';
import { EVENT_MODE, EventModeType } from '@/shared/types';
import { useRouter } from 'next/router';
import { PATH } from '@/shared/path';
import { DateTime } from 'luxon';

type Props = {
	mode: EventModeType;
	defaultValues?: Partial<EditEventInput>;
	onSubmit: SubmitHandler<CreateEventInput | EditEventInput>;
};

export const EventForm = ({ mode, defaultValues, onSubmit }: Props) => {
	const router = useRouter();
	const schema = mode === EVENT_MODE.CREATE ? CreateEventSchema : EditEventSchema;

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<CreateEventInput | EditEventInput>({
		resolver: zodResolver(schema),
		mode: 'onBlur',
		defaultValues,
	});

	const descriptionValue = watch('description') || '';
	const lettersCount = descriptionValue.length;

	const handleCancel = () => {
		reset();
		router.push(PATH.HOME.ROOT).then(r => r);
	};

	const handleFormSubmit: SubmitHandler<CreateEventInput | EditEventInput> = (data) => {
		const payload = {
			...data,
			eventDate: data.eventDate
				? DateTime.fromJSDate(new Date(data.eventDate)).toFormat('yyyy-MM-dd\'T\'HH:mm')
				: undefined,

		};
		onSubmit(payload);
	};

	return (
		<div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
			<h1 className="text-4xl font-semibold text-gray-900 mb-2">
				{mode === EVENT_MODE.CREATE ? 'Create' : 'Edit'} events
			</h1>

			<form onSubmit={handleSubmit(handleFormSubmit)}
				  noValidate>
				{/* Название */}
				<div className="mb-6">
					<label htmlFor="title"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Title
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
						Description
					</label>
					<textarea
						id="description"
						{...register('description')}
						rows={6}
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 ${
							errors.description ? 'outline-red-600' : ''
						}`}
						placeholder="Describe the event"
					/>
					<p className={`mt-1 text-sm ${errors.description ? 'text-red-600' : 'text-gray-600'}`}>
						Write a few sentences about the event.. <span>{lettersCount} / 300 symbols</span>
					</p>
					{errors.description && <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>}
				</div>

				{/* Дата */}
				<div className="mb-6">
					<label htmlFor="eventDate"
						   className="block text-sm font-semibold text-gray-900 mb-2">
						Event date
					</label>
					<input
						id="eventDate"
						type="datetime-local"
						{...register('eventDate')}
						className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 ${
							errors.eventDate ? 'outline-red-600' : ''
						}`}
					/>
					{errors.eventDate && <p className="mt-1 text-xs text-red-600">{errors.eventDate.message}</p>}
				</div>

				<div className="flex flex-col gap-3">
					<button
						type="submit"
						className="w-full rounded-md bg-amber-50 px-4 py-2 text-black font-semibold shadow-lg"
					>
						{mode === EVENT_MODE.CREATE ? 'Create' : 'Save'}
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-lg"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};
