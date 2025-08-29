'use client';

import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { ROLES } from '@/shared/types';


export const UsersTable: FC<{
	users: any[];
	onDelete: (id: number, name: string) => void;
}> = ({ users, onDelete }) => (
	<div className="overflow-x-auto rounded-lg shadow border border-border">
		<table className="w-full border-collapse bg-card text-sm text-left">
			<thead className="bg-muted text-muted-foreground uppercase text-xs">
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
				<tr key={u.id}
					className="hover:bg-muted/50 transition-colors">
					<td className="px-4 py-3 border font-mono text-muted-foreground">{u.id}</td>
					<td className="px-4 py-3 border text-foreground">
						{u.deleted ? 'User deleted' : u.name}
					</td>
					<td className="px-4 py-3 border text-muted-foreground">{u.email}</td>
					<td className="px-4 py-3 border">
              <span
				  className={`px-2 py-1 rounded-full text-xs font-medium ${
					  u.role === ROLES.ADMIN
						  ? 'bg-destructive/20 text-destructive'
						  : 'bg-primary/20 text-primary'
				  }`}
			  >
                {u.role}
              </span>
					</td>
					<td className="px-4 py-3 border text-center">
						{!u.deleted && u.role !== ROLES.ADMIN && (
							<button
								onClick={() => onDelete(u.id, u.name)}
								className="inline-flex items-center gap-2 text-destructive hover:text-destructive/80 font-medium transition-colors cursor-pointer"
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
						className="text-center py-6 text-muted-foreground">
						No registered users.
					</td>
				</tr>
			)}
			</tbody>
		</table>
	</div>
);