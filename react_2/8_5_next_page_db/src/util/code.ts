export const CODE = {
	UNAUTHORIZED: 'UNAUTHORIZED',
	FORBIDDEN: 'FORBIDDEN',
	NOT_FOUND: 'NOT_FOUND',
} as const;

export type TRPCErrorCode = typeof CODE[keyof typeof CODE];