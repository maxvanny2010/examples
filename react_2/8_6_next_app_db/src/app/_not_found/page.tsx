'use client';
export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PATH } from '@/shared/path';

export default function NotFoundPage() {
	const router = useRouter();

	useEffect(() => {
		router.push(PATH.HOME.ROOT);
	}, [router]);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<h1 className="text-3xl font-bold">Page Not Found</h1>
		</div>
	);
}