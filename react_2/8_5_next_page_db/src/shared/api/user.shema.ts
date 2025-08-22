import { z } from 'zod';
import { ROLES } from '@/shared/types';

export const CreateUserSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(3),
	role: z.enum([ROLES.GUEST, ROLES.USER, ROLES.ADMIN]).optional(),
});

export const EditUserSchema = CreateUserSchema.extend({
	id: z.number().int().positive(),
});

export const UniqueUserSchema = z.object({
	id: z.number().int().positive(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type EditUserInput = z.infer<typeof EditUserSchema>;
