import { useRouter } from 'next/router';

export function BackButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="mb-6 px-4 py-2 bg-cyan-800 rounded hover:bg-gray-400"
		>
			← Назад
		</button>
	);
}
