import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { Context } from './context';
import prisma from '@/server/db';
import { CODE, MESSAGES } from '@/util';

const t = initTRPC.context<Context>().create({
	transformer: superjson,
});

export const router = t.router;
export const procedure = t.procedure;

// Middleware: авторизация
export const isAuth = t.middleware(({ ctx, next }) => {
	if (!ctx.user) throw new TRPCError({ code: CODE.UNAUTHORIZED });
	return next({ ctx });
});

// Middleware: активный пользователь
export const requireActiveUser = t.middleware(async ({ ctx, next }) => {
	if (!ctx.user) throw new TRPCError({ code: CODE.FORBIDDEN });

	const dbUser = await prisma.user.findUnique({ where: { id: ctx.user.id } });
	if (!dbUser || dbUser.deleted)
		throw new TRPCError({ code: CODE.FORBIDDEN, message: MESSAGES.USER_NOT_FOUND });

	return next({ ctx: { ...ctx, dbUser } });
});
