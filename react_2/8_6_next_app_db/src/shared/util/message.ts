export const MESSAGES = {
	USER_NOT_FOUND: 'User not found or deleted',
	EVENT_NOT_FOUND: 'Event not found',
	EVENT_NO_ID: 'Event ID not provided',
	ADMIN_EMAIL: 'admin@gmail.com',
	ADMIN_NAME: 'admin',
	AMIN_EXIST: 'Admin already exists',
	ADMIN_CREATED: 'Admin user created: admin@gmail.com / admin',
	ADMIN_FAILED: 'Failed to ensure admin exists:',
	ADMIN_ONLY: 'Admin only',
} as const;
export type Messages = typeof MESSAGES[keyof typeof MESSAGES];