'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ModalSlot() {
	const router = useRouter();

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') router.back();
		};
		window.addEventListener('keydown', handleEsc);
		return () => window.removeEventListener('keydown', handleEsc);
	}, [router]);

	const handleClose = () => router.back();

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button
					onClick={handleClose}
					className="absolute top-2 right-2 text-gray-400 hover:text-white"
					aria-label="Close modal"
				>
					✕
				</button>
				<h2 className="text-xl font-bold mb-4">Modal window</h2>
				<p>Content Static modal window</p>
			</div>
		</div>
	);
}
