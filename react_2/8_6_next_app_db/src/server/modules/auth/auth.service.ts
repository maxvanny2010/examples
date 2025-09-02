import bcrypt from 'bcryptjs';
import { authRepository } from './auth.repository';
import { ROLES } from '@/shared/types';
import { CreateUserInput } from '@/shared/schema';
import { TRPCError } from '@trpc/server';
import { CODE, MESSAGES } from '@/shared/util';

export const authService = {
	register: async (data: CreateUserInput) => {
		const existingUser = await authRepository.findByEmail(data.email);
		if (existingUser) {
			throw new TRPCError({
				code: CODE.CONFLICT,
				message: MESSAGES.USER_ALREADY_REGISTERED,
			});
		}

		const hashedPassword = await bcrypt.hash(data.password, 10);

		return authRepository.createUser({
			name: data.name,
			email: data.email,
			password: hashedPassword,
			role: ROLES.USER,
		});
	},
};
