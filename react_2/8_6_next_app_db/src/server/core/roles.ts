import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { ROLES, RoleType } from '@/shared/types';

interface UserRole {
	id?: number;
	role: RoleType;
	name: string;
	email?: string;
}

export const hasRole = (userRole: Role, allowedRoles: Role[]): boolean => {
	return allowedRoles.includes(userRole);
};
export const useUserRole = (): UserRole => {
	const { data: session } = useSession();

	if (!session?.user) {
		return {
			role: ROLES.GUEST,
			name: ROLES.GUEST,
			email: undefined,
			id: undefined,
		};
	}

	return {
		id: Number(session.user.id),
		role: session.user.role as RoleType, // явно к RoleType
		name: session.user.name ?? session.user.email ?? ROLES.USER, // fallback на email
		email: session.user.email ?? undefined,
	};
};