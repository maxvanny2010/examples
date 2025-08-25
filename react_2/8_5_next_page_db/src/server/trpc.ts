// server/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import type { ContextWithDBUser } from './context';
import { ROLES } from '@/shared/types';
import { CODE, MESSAGES } from '@/util';

const t = initTRPC.context<ContextWithDBUser>().create({
	transformer: superjson,
});

export const router = t.router;
export const procedure = t.procedure;

// пользователь авторизован
export const isAuth = t.middleware(({ ctx, next }) => {
	if (!ctx.user) {
		throw new TRPCError({ code: CODE.UNAUTHORIZED });
	}
	return next({ ctx });
});

// активный пользователь (dbUser есть гарантированно)
export const requireActiveUser = t.middleware(({ ctx, next }) => {
	if (!ctx.dbUser) {
		throw new TRPCError({ code: CODE.FORBIDDEN, message: MESSAGES.USER_NOT_FOUND });
	}
	return next({ ctx });
});

// роль админа
export const requireAdmin = t.middleware(({ ctx, next }) => {
	if (ctx.dbUser.role !== ROLES.ADMIN) {
		throw new TRPCError({ code: CODE.FORBIDDEN, message: MESSAGES.ADMIN_ONLY });
	}
	return next({ ctx });
});

// --- Процедуры ---
export const protectedProcedure = t.procedure.use(isAuth).use(requireActiveUser);
export const adminProcedure = protectedProcedure.use(requireAdmin);
