export const MESSAGES = {
	USER_NOT_FOUND: 'Пользователь не найден или удалён',
	EVENT_NOT_FOUND: 'Событие не найдено',
	ADMIN_EMAIL: 'admin@gmail.com',
	ADMIN_NAME: 'admin',
	AMIN_EXIST: 'Admin already exists',
	ADMIN_CREATED: 'Admin user created: admin@gmail.com / admin',
	ADMIN_FAILED: 'Failed to ensure admin exists:',
} as const;
export type Messages = typeof MESSAGES[keyof typeof MESSAGES];