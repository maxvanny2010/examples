'use client';

import { AiOutlineDelete } from 'react-icons/ai';
import { ROLES } from '@/shared/types';
import { DBUser } from '@/shared/types/next-auth';
import Link from 'next/link';

type UsersTableProps = {
	users: DBUser[];
	onDeleteAction: (id: string, name: string) => string;
};

export function UsersTable({ users, onDeleteAction }: UsersTableProps) {
	return (
		<div className="overflow-x-auto rounded-lg shadow">
			<table className="w-full border-collapse bg-white text-sm text-left">
				<thead className="bg-gray-100 text-gray-700 uppercase text-xs">
				<tr>
					<th className="px-4 py-3 border">ID</th>
					<th className="px-4 py-3 border">Name</th>
					<th className="px-4 py-3 border">Email</th>
					<th className="px-4 py-3 border">Role</th>
					<th className="px-4 py-3 border text-center">Actions</th>
				</tr>
				</thead>
				<tbody>
				{users?.map((u) => (
					<tr
						key={u.id}
						className="hover:bg-gray-50 transition-colors"
					>
						<td className="px-4 py-3 border border-black font-mono text-gray-600">
							{u.id}
						</td>
						<td className="px-4 py-3 border border-black text-gray-800">
							{u.deleted ? 'Пользователь удален' : u.name}
						</td>
						<td className="px-4 py-3 border border-black text-gray-600">
							{u.email}
						</td>
						<td className="px-4 py-3 border border-black">
                <span
					className={`px-2 py-1 rounded-full text-xs font-medium ${
						u.role === ROLES.ADMIN
							? 'bg-red-100 text-red-700'
							: 'bg-blue-100 text-blue-700'
					}`}
				>
                  {u.role}
                </span>
						</td>
						<td className="px-4 py-3 border border-black text-center">
							{!u.deleted && u.role !== ROLES.ADMIN && (
								<Link
									href={onDeleteAction(u.id, u.name)}
									className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors cursor-pointer"
								>
									<AiOutlineDelete className="text-lg" />
								</Link>
							)}
						</td>
					</tr>
				))}
				{users?.length === 0 && (
					<tr>
						<td colSpan={5}
							className="text-center py-6 text-black">
							No registered users.
						</td>
					</tr>
				)}
				</tbody>
			</table>
		</div>
	);
}
