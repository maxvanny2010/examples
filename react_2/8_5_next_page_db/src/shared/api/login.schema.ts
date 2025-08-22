import z from 'zod';

export const loginSchema = z.object({
	email: z.string().min(1, 'Email обязателен').email('Неверный формат email'),
	password: z.string().min(3, 'Пароль должен содержать минимум 3 символа'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
