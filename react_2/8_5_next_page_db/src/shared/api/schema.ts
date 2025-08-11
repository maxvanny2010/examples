import z from 'zod';

export const CreateEventSchema = z.object({
	title: z.string().min(1, 'Поле названия не может быть пустым.'),
	description: z.string().optional(),
	eventDate: z.string().refine(val => !isNaN(Date.parse(val)), {
		message: 'Invalid date format',
	}),
});