'use client';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';
import { PATH } from '@/shared/path';

export const LoginLink = () => {
	return (
		<Link
			href={PATH.AUTH.SIGNIN}
			className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md
                 hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
		>
			<FiLogIn className="text-lg" />
			Login
		</Link>
	);
};
