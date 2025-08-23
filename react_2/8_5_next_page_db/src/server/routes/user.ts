import prisma from '@/server/db';
import bcrypt from 'bcryptjs';
import { isAuth, requireActiveUser, procedure, router } from '@/server/trpc';
import { CreateUserSchema, EditUserSchema, UniqueUserSchema } from '@/shared/api/';
import { ROLES, RoleType } from '@/shared/types';
import { checkRole } from '../roles';

export const userRouter = router({
	findAll: procedure
		.use(isAuth)
		.use(requireActiveUser)
		.query(async ({ ctx }) => {
			checkRole(ctx.dbUser.role, [ROLES.ADMIN as RoleType]);
			return prisma.user.findMany({
				where: { deleted: false },
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					deleted: true,
				},
			});
		}),

	findUnique: procedure
		.input(UniqueUserSchema)
		.use(isAuth)
		.use(requireActiveUser)
		.query(async ({ input, ctx }) => {
			checkRole(ctx.dbUser.role, [ROLES.ADMIN as RoleType]);
			return prisma.user.findFirst({
				where: { id: input.id, deleted: false },
			});
		}),

	create: procedure
		.input(CreateUserSchema)
		.use(isAuth)
		.use(requireActiveUser)
		.mutation(async ({ input, ctx }) => {
			checkRole(ctx.dbUser.role, [ROLES.ADMIN as RoleType]);
			const hashedPassword = await bcrypt.hash(input.password, 10);
			return prisma.user.create({
				data: {
					name: input.name,
					email: input.email,
					password: hashedPassword,
					role: input.role ?? ROLES.USER,
				},
			});
		}),

	update: procedure
		.input(EditUserSchema)
		.use(isAuth)
		.use(requireActiveUser)
		.mutation(async ({ input, ctx }) => {
			checkRole(ctx.dbUser.role, [ROLES.ADMIN as RoleType]);
			const data: any = { name: input.name, email: input.email, role: input.role };
			if (input.password) data.password = await bcrypt.hash(input.password, 10);
			return prisma.user.update({
				where: { id: input.id },
				data,
			});
		}),

	delete: procedure
		.input(UniqueUserSchema)
		.use(isAuth)
		.use(requireActiveUser)
		.mutation(async ({ input, ctx }) => {
			checkRole(ctx.dbUser.role, [ROLES.ADMIN as RoleType]);
			return prisma.user.update({
				where: { id: input.id },
				data: { deleted: true }, // soft delete
			});
		}),
});
