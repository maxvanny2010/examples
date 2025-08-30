'use client';

import { FC } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { PATH } from '@/shared/path';

export const CardUnauthorized: FC = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center h-96">
			<div className="flex flex-col items-center bg-background shadow-lg rounded-2xl p-6 max-w-sm border border-border">
				<AiOutlineLock className="text-5xl text-red-500 mb-4" />
				<h2 className="text-xl font-semibold text-foreground">Authorization required</h2>
				<p className="text-muted-foreground mt-2 text-center">
					Please log in to access the admin panel.
				</p>
				<button
					onClick={() => router.push(PATH.AUTH.SIGNIN)}
					className="mt-4 px-4 py-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg transition-colors"
				>
					Sign in
				</button>
			</div>
		</div>
	);
};
