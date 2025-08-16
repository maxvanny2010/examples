import Link from 'next/link';
import { FC } from 'react';

export const HomeButton: FC = () => {
	return (
		<Link
			href="/"
			className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
		>
			На главную
		</Link>
	);
};
