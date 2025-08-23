export const MESSAGES = {
	USER_NOT_FOUND: 'Пользователь не найден или удалён',
	EVENT_NOT_FOUND: 'Событие не найдено',
} as const;
export type Messages = typeof MESSAGES[keyof typeof MESSAGES];