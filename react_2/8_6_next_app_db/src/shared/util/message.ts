export const MESSAGES = {
	USER_NOT_FOUND: 'User not found or deleted',
	USER_PASSWORD_NOT_FOUND: 'Invalid email or password. Please try again',
	EVENT_NOT_FOUND: 'Event not found',
	EVENT_NO_ID: 'Event ID not provided',
	AMIN_EXIST: 'Admin already exists',
	ADMIN_CREATED: 'Admin user created: admin@gmail.com / admin',
	ADMIN_FAILED: 'Failed to ensure admin exists:',
	ADMIN_ONLY: 'Admin only',
} as const;
export type Messages = typeof MESSAGES[keyof typeof MESSAGES];