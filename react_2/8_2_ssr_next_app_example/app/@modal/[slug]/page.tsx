'use client';

import { useParams, useRouter } from 'next/navigation';

export default function DynamicModal() {
	const { slug } = useParams<{ slug: string }>();
	const router = useRouter();

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2 className="text-xl font-bold mb-4">Modal for: {slug}</h2>
				<p>This is a dynamic modal with slug: {slug}</p>
				<button
					className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
					onClick={() => router.back()}
				>
					Close
				</button>
			</div>
		</div>
	);
}
