export const MESSAGES = {
	USER_NOT_FOUND: 'User not found or deleted',
	USER_PASSWORD_NOT_FOUND: 'Invalid email or password. Please try again',
	USER_ALREADY_REGISTERED: 'User already registered',
	USER_ERROR_REGISTRATION: 'Registration error. Please try again later.',
	EVENT_NOT_FOUND: 'Event not found',
	EVENT_NOT_CORRECT_ID: 'An event ID isn\'t corrected',
	EVENT_ERROR_UPDATE: 'Event update error.',
	EVENT_NO_ID: 'Event ID not provided',
	ADMIN_EXIST: 'Admin already exists',
	ADMIN_CREATED: 'Admin user created: admin@gmail.com / admin',
	ADMIN_FAILED: 'Failed to ensure admin exists:',
	ADMIN_ONLY: 'Admin only',
	META: 'Next SSR React Prisma app',
} as const;
export type Messages = typeof MESSAGES[keyof typeof MESSAGES];