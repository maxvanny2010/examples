'use client';

import { FC } from 'react';

export const SkeletonUsers: FC = () => (
	<div className="p-6 animate-pulse">
		<h2 className="text-2xl font-semibold mb-6 text-foreground">Users</h2>
		<div className="overflow-x-auto rounded-lg shadow border border-border">
			<table className="w-full border-collapse bg-card text-sm text-left">
				<thead className="bg-muted text-muted-foreground uppercase text-xs">
				<tr>
					<th className="px-4 py-3 border">ID</th>
					<th className="px-4 py-3 border">Name</th>
					<th className="px-4 py-3 border">Email</th>
					<th className="px-4 py-3 border">Role</th>
					<th className="px-4 py-3 border text-center">Action</th>
				</tr>
				</thead>
				<tbody>
				{Array.from({ length: 5 }).map((_, i) => (
					<tr key={i}>
						{['w-12', 'w-24', 'w-32', 'w-16', 'w-20'].map((w, j) => (
							<td key={j}
								className="px-4 py-3 border">
								<div className={`h-4 bg-muted rounded ${w} mx-auto`}></div>
							</td>
						))}
					</tr>
				))}
				</tbody>
			</table>
		</div>
	</div>
);