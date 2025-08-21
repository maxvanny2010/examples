export const BUTTON_EVENT_TYPE = {
	CREATE: 'create',
	EDIT: 'edit',
	DETAIL: 'detail',
} as const;

export type ButtonEventType = typeof BUTTON_EVENT_TYPE[keyof typeof BUTTON_EVENT_TYPE];