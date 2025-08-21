'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import { ButtonEventAction, ButtonHeader } from '@/components';
import { useSession } from 'next-auth/react';
import { PATH } from '@/shared/path';
import { BUTTON_EVENT_TYPE } from '@/shared/types';

type LayoutProps = {
	children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	const { data: session } = useSession();
	const router = useRouter();
	const isHome = router.pathname === PATH.HOME.ROOT;
	const { id } = router.query;
	const eventId = Array.isArray(id) ? id[0] : id;

	// проверка, это detail-страница?
	const isDetailPage = Boolean(eventId) && router.pathname === PATH.EVENTS.ID('[id]');

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="p-4 bg-white shadow-md flex justify-between items-center">
				{/* Home слева, только если не на главной */}
				<div>
					{!isHome && (
						<Link
							href="/"
							className="text-2xl text-gray-700 hover:text-gray-900"
						>
							<AiOutlineHome />
						</Link>
					)}
				</div>

				{/* Логин/логаут справа */}
				<div className="flex items-center gap-2">
					<ButtonHeader session={session} />
					{isHome && <ButtonEventAction
						session={session}
						type={BUTTON_EVENT_TYPE.CREATE}
					/>}
					{isDetailPage && <ButtonEventAction
						session={session}
						type={BUTTON_EVENT_TYPE.EDIT}
						id={eventId}
					/>}
				</div>
			</header>

			<main className="p-4">{children}</main>
		</div>
	);
};
