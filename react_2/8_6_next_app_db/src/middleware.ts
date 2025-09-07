import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from './auth.edge';

export async function middleware(req: NextRequest) {
	const session = await auth();

	console.log('Middleware session: 🔑 ', session);

	const headers = new Headers(req.headers);

	if (session?.user?.id) {
		headers.set('x-user-id', String(session.user.id));
		if (session.user.role) headers.set('x-user-role', session.user.role);
	}

	return NextResponse.next({
		request: { headers },
	});
}

export const config = {
	matcher: ['/api/trpc/:path*'],
};
