export const ROLES = {
	GUEST: 'GUEST' as const,
	USER: 'USER' as const,
	ADMIN: 'ADMIN' as const,
};

export type RoleType = (typeof ROLES)[keyof typeof ROLES];
