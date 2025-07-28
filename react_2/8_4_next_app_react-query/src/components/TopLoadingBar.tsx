'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';

export const TopLoadingBar = () => {
	const ref = useRef<any>(null);
	const router = useRouter();

	useEffect(() => {
		const handleStart = () => ref.current?.continuousStart();
		const handleComplete = () => ref.current?.complete();

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	return <LoadingBar color="#3498db"
					   ref={ref}
					   height={3}
					   shadow={true} />;
};
