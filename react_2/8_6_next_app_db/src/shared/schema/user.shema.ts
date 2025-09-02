import { z } from 'zod';
import { ROLES } from '@/shared/types';

export const CreateUserSchema = z.object({
	name: z.string().min(3, 'Name is required'),
	email: z.string().min(1, 'Email is required').email('Invalid email format'),
	password: z.string().min(3, 'Password must be at least 3 characters long'),
	role: z.enum([ROLES.GUEST, ROLES.USER, ROLES.ADMIN]),
});

export const EditUserSchema = CreateUserSchema.extend({
	id: z.number().int().positive(),
});

export const UniqueUserSchema = z.object({
	id: z.number().int().positive(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type EditUserInput = z.infer<typeof EditUserSchema>;
export type UniqueUserInput = z.infer<typeof UniqueUserSchema>;
