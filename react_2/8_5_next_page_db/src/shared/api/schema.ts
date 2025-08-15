import z from 'zod';

export const CreateEventSchema = z.object({
	title: z.string().min(1, 'Поле названия не может быть пустым.'),
	description: z.string().optional(),
	eventDate: z.string().refine(val => !isNaN(Date.parse(val)), {
		message: 'Invalid date format',
	}),
});
export const JoinEventSchema = z.object({
	id: z.number().int().positive(),
});
export const UniqueEventSchema = z.object({
	id: z.number().int().positive(),
});
