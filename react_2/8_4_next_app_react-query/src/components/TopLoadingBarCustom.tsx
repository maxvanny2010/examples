'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//not used
export const TopLoadingBar = () => {
	const [progress, setProgress] = useState(0);
	const [visible, setVisible] = useState(false);
	const router = useRouter();

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const handleStart = () => {
			setProgress(0);
			setVisible(true);
			timeout = setInterval(() => {
				setProgress((prev) => (prev < 90 ? prev + 10 : prev));
			}, 200);
		};

		const handleComplete = () => {
			clearInterval(timeout);
			setProgress(100);
			setTimeout(() => {
				setVisible(false);
				setProgress(0);
			}, 300);
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
			clearInterval(timeout);
		};
	}, [router]);

	if (!visible) return null;

	return (
		<div
			className="fixed top-0 left-0 h-1 bg-blue-500 z-[9999] transition-all duration-200"
			style={{ width: `${progress}%` }}
		/>
	);
};
