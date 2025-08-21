export const PATH = {
	EVENTS: {
		ROOT: '/events',
		ID: (id: string | number) => `/events/${id}`,
		CREATE: '/events/create',
		EDIT: (id: string | number) => `/events/edit/${id}`,
	},
	HOME: {
		ROOT: '/',
	},
	AUTH: {
		ROOT: '/auth',
		SIGNIN: '/auth/signin',
	},
} as const;
