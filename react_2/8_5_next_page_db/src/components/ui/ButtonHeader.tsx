import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PATH } from '@/shared/path';
import { BUTTON_EVENT_TYPE, ROLES } from '@/shared/types';
import { hasRole } from '@/server/roles';
import ButtonEventAction from '@/components/ui/ButtonAction';
import {
	AiOutlineDashboard,
	AiOutlineEdit,
	AiOutlineHome,
	AiOutlineLogout,
	AiOutlinePlusCircle,
} from 'react-icons/ai';

interface ButtonHeaderProps {
	user: { role: typeof ROLES[keyof typeof ROLES]; name?: string; email?: string };
}

export default function ButtonHeader({ user }: ButtonHeaderProps) {
	const router = useRouter();
	const eventId = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

	const isDetailPage = Boolean(eventId) && router.pathname === PATH.EVENTS.ID('[id]');
	const isHome = router.pathname === PATH.HOME.ROOT;
	const isDashboard = router.pathname === PATH.ADMIN.DASHBOARD;
	const isSignIn = router.pathname === PATH.AUTH.SIGNIN;
	const isRegister = router.pathname === PATH.AUTH.REGISTER;

	// Гость
	if (user.role === ROLES.GUEST) {
		return (
			<div className="flex items-center space-x-2">
				{!isSignIn && (
					<Link
						href={PATH.AUTH.SIGNIN}
						className="btn bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm shadow-lg flex items-center cursor-pointer"
					>
						<AiOutlineHome className="mr-1" />
						Login
					</Link>
				)}
				{!isRegister && (
					<Link
						href={PATH.AUTH.REGISTER}
						className="btn bg-blue-600  hover:bg-blue-700 text-white px-3 py-1 rounded text-sm shadow-lg flex items-center  cursor-pointer"
					>
						<AiOutlinePlusCircle className="mr-1" />
						Registration
					</Link>
				)}
			</div>
		);
	}

	const logoutHandler = async () => {
		await signOut({ callbackUrl: PATH.HOME.ROOT });
	};
	const editHandler = async () => {
		if (!eventId) return;
		await router.push(PATH.EVENTS.EDIT(eventId));
	};
	const createHandler = async () => {
		await router.push(PATH.EVENTS.CREATE);
	};

	return (
		<div className="flex items-center space-x-2">
			{hasRole(user.role, [ROLES.ADMIN, ROLES.USER]) && (
				<div className="flex items-center gap-2">
					{user.role === ROLES.ADMIN && !isDashboard && (
						<Link
							href={PATH.ADMIN.DASHBOARD}
							className="ml-4 btn bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm shadow-lg flex items-center"
						>
							<AiOutlineDashboard className="mr-1" />
							Dashboard
						</Link>
					)}
					{(isHome || isDetailPage) && (
						<ButtonEventAction
							type={BUTTON_EVENT_TYPE.CREATE}
							className="flex items-center gap-1 cursor-pointer"
							onClick={createHandler}>
							<AiOutlinePlusCircle />
							<span>Create</span>
						</ButtonEventAction>

					)}
					{isDetailPage && (
						<ButtonEventAction
							type={BUTTON_EVENT_TYPE.EDIT}
							className="flex items-center gap-1 cursor-pointer"
							onClick={editHandler}>
							<AiOutlineEdit />
							<span>Edit</span>
						</ButtonEventAction>
					)}
					<button
						onClick={logoutHandler}
						className="btn bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm shadow-lg flex items-center  cursor-pointer"
					>
						<AiOutlineLogout className="mr-1" />
						Logout ({user.name})
					</button>

				</div>
			)}
		</div>
	);
}
