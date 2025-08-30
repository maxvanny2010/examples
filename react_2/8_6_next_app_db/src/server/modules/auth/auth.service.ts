import bcrypt from 'bcryptjs';
import { authRepository } from './auth.repository';
import { ROLES } from '@/shared/types';
import { CreateUserInput } from '@/shared/api';

export const authService = {
	register: async (data: CreateUserInput) => {
		const hashedPassword = await bcrypt.hash(data.password, 10);

		return authRepository.createUser({
			name: data.name,
			email: data.email,
			password: hashedPassword,
			role: ROLES.USER, // фиксированная роль, даже если клиент передал другое
		});
	},
};
