export const EVENT_MODE = {
	CREATE: 'create',
	EDIT: 'edit',
} as const;

export type EventModeType = typeof EVENT_MODE[keyof typeof EVENT_MODE]; // "create" | "edit"
export type EventModeKey = keyof typeof EVENT_MODE; // "CREATE" | "EDIT"
