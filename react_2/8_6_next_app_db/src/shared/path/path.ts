export const PATH = {
	EVENTS: {
		ROOT: '/events',
		ID: (id: string | number) => `/events/${id}`,
		CREATE: '/events/create',
		DELETE: (id: string | number) => `/events/${id}/delete`,
		EDIT: (id: string | number) => `/events/${id}/edit`,
	},
	HOME: {
		ROOT: '/',
	},
	AUTH: {
		ROOT: '/auth',
		SIGNIN: '/auth/signin',
		REGISTER: '/auth/register',
	},
	ADMIN: {
		ROOT: '/admin',
		DASHBOARD: '/admin/dashboard',
		DELETE: (id: string | number) => `/admin/delete/user/${id}/`,
	},
} as const;
