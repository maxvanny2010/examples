import { ROLES } from '../types';
import z from 'zod';

export const registerSchema = z
	.object({
		name: z.string().min(1, 'Имя обязательно'),
		email: z.string().min(1, 'Email обязателен').email('Неверный формат email'),
		password: z.string().min(3, 'Пароль должен содержать минимум 3 символа'),
		confirmPassword: z.string().min(1, 'Подтвердите пароль'),
		role: z.literal(ROLES.USER),
	})
	.refine((data) => {
		console.log('Проверка паролей:', data.password, data.confirmPassword);
		return data.password === data.confirmPassword;
	}, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});


export type RegisterFormData = z.infer<typeof registerSchema>;
