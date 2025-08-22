import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { ROLES, RoleType } from '@/shared/types';

export const checkRole = (userRole: Role, allowedRoles: Role[]) => {
	if (!allowedRoles.includes(userRole)) {
		throw new Error('Нет прав для выполнения действия');
	}
};
export const hasRole = (userRole: Role, allowedRoles: Role[]): boolean => {
	return allowedRoles.includes(userRole);
};
export const useUserRole = (): { role: RoleType; name?: string; email?: string } => {
	const { data: session } = useSession();

	if (!session?.user) {
		return { role: ROLES.GUEST, name: ROLES.GUEST, email: undefined };
	}

	return {
		role: session.user.role,
		name: session.user.name ?? undefined,
		email: session.user.email ?? undefined,
	};
};