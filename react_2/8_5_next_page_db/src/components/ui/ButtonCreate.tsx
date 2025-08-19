'use client';

import { useRouter } from 'next/router';
import { Session } from 'next-auth';

type ButtonCreateProps = {
	session: Session | null;
};

export const ButtonCreate = ({ session }: ButtonCreateProps) => {
	const router = useRouter();

	const handleCreate = async () => {
		await router.push('/events/create');
	};

	if (!session?.user) return null;

	return (
		<button
			className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm shadow-lg"
			onClick={handleCreate}
		>
			Create event
		</button>
	);
};
