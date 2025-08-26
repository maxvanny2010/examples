import z from 'zod';

export const CreateEventSchema = z.object({
	title: z.string().min(3, 'Title must be at least 3 characters long'),
	description: z
		.string()
		.max(300, 'Description is too long')
		.optional(),
	eventDate: z
		.string()
		.optional()
		.refine((val) => !val || !Number.isNaN(Date.parse(val)), {
			message: 'Invalid date',
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
export type JoinEventInput = z.infer<typeof JoinEventSchema>;
export type UniqueEventInput = z.infer<typeof UniqueEventSchema>;