import { procedure, router } from '@/server/trpc';
import prisma from '@/server/db';
import bcrypt from 'bcryptjs';
import { ROLES } from '@/shared/types';
import { CreateUserSchema } from '@/shared/api/';

export const authRouter = router({
	register: procedure
		.input(CreateUserSchema)
		.mutation(async ({ input }) => {
			const hashedPassword = await bcrypt.hash(input.password, 10);

			return prisma.user.create({
				data: {
					name: input.name,
					email: input.email,
					password: hashedPassword,
					role: ROLES.USER, // всегда USER
				},
			});
		}),
});
