import { trpc } from '@/shared/api';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';
import { SkeletonUsers } from '@/entities/event';
import { UserDeleteModal } from '@/components';
import { ROLES } from '@/shared/types';

const AdminDashboard = () => {
	const { data: users, refetch, isLoading } = trpc.user.findAll.useQuery();
	const deleteUser = trpc.user.delete.useMutation({
		onSuccess: () => {
			refetch().then(r => r);
			setSelectedUser(null);
		},
	});

	const [selectedUser, setSelectedUser] = useState<null | { id: string | number; name: string }>(null);

	if (isLoading) {
		return <SkeletonUsers />;
	}

	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-6 text-black text-center">Пользователи</h2>

			<div className="overflow-x-auto rounded-lg shadow">
				<table className="w-full border-collapse bg-white text-sm text-left">
					<thead className="bg-gray-100 text-gray-700 uppercase text-xs">
					<tr>
						<th className="px-4 py-3 border">ID</th>
						<th className="px-4 py-3 border">Имя</th>
						<th className="px-4 py-3 border">Email</th>
						<th className="px-4 py-3 border">Роль</th>
						<th className="px-4 py-3 border text-center">Действия</th>
					</tr>
					</thead>
					<tbody>
					{users?.map((u) => (
						<tr
							key={u.id}
							className="hover:bg-gray-50 transition-colors"
						>
							<td className="px-4 py-3 border font-mono text-gray-600">{u.id}</td>
							<td className="px-4 py-3 border text-gray-800 text-shadow lg">{u.name}</td>
							<td className="px-4 py-3 border text-gray-600">{u.email}</td>
							<td className="px-4 py-3 border">
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
							<td className="px-4 py-3 border text-center">
								{u.role !== ROLES.ADMIN && (
									<button
										onClick={() => setSelectedUser({ id: u.id, name: u.name })}
										className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors cursor-pointer"
									>
										<AiOutlineDelete className="text-lg" />
									</button>
								)}
							</td>

						</tr>
					))}
					{users?.length === 0 && (
						<tr>
							<td colSpan={5}
								className="text-center py-6 text-gray-500">
								Нет зарегистрированных пользователей
							</td>
						</tr>
					)}
					</tbody>
				</table>
			</div>

			{/* Модалка подтверждения */}
			{selectedUser && (
				<UserDeleteModal
					name={selectedUser.name}
					onCancel={() => setSelectedUser(null)}
					onConfirm={() => deleteUser.mutate({ id: Number(selectedUser.id) })}
				/>
			)}
		</div>
	);
};

export default AdminDashboard;
