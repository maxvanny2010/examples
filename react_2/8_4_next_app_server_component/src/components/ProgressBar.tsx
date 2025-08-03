'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import nprogress from 'nprogress';

export default function ProgressBar() {
	const pathname = usePathname();

	useEffect(() => {
		nprogress.done();
		return () => {
			nprogress.done();
		};
	}, [pathname]);

	return null;
}
