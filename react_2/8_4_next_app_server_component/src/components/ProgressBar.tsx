// ProgressBar.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import nprogress from 'nprogress';

export default function ProgressBar() {
	const pathname = usePathname();

	useEffect(() => {
		nprogress.start();

		// Симулируем задержку как будто идёт загрузка страницы
		const timeout = setTimeout(() => {
			nprogress.done();
		}, 100); // можно подстроить под загрузку данных

		return () => clearTimeout(timeout);
	}, [pathname]);

	return null;
}
