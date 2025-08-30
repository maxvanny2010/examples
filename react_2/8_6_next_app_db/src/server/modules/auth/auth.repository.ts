import prisma from '@/server/core/db';
import { CreateUserInput } from '@/shared/api';

export const authRepository = {
	createUser: (data: CreateUserInput) => {
		return prisma.user.create({ data });
	},
};
