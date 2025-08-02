'use client';

import { useRouter } from 'next/navigation';

export function BackButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="mb-6 px-4 py-2 bg-gray-400 rounded hover:bg-cyan-800"
		>
			← Назад
		</button>
	);
}
