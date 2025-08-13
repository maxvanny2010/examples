declare module 'next-auth' {
	interface User {
		id: number,
		email: string,
		name: string,
	}

	interface Session {
		user: User;
	}
}