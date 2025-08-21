import z from 'zod';

export const CreateEventSchema = z.object({
	title: z.string().min(3, 'Название должно содержать хотя бы 3 символа'),
	description: z
		.string()
		.max(300, 'Описание слишком длинное')
		.optional(),
	eventDate: z
		.string()
		.optional()
		.refine((val) => !val || !Number.isNaN(Date.parse(val)), {
			message: 'Неверная дата',
		}),
});

export const EditEventSchema = CreateEventSchema.extend({
	id: z.number().int().positive().optional(),
});

export const JoinEventSchema = z.object({
	id: z.number().int().positive(),
});

export const UniqueEventSchema = z.object({
	id: z.number().int().positive(),
});

export type CreateEventInput = z.infer<typeof CreateEventSchema>;
export type EditEventInput = z.infer<typeof EditEventSchema>;