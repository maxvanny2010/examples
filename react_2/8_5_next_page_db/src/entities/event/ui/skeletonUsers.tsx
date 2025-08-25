import React from 'react';

export const SkeletonUsers = () => {
	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-6">Users</h2>
			<div className="overflow-x-auto rounded-lg shadow">
				<table className="w-full border-collapse bg-white text-sm text-left">
					<thead className="bg-gray-100 text-gray-700 uppercase text-xs">
					<tr>
						<th className="px-4 py-3 border">ID</th>
						<th className="px-4 py-3 border">Name</th>
						<th className="px-4 py-3 border">Email</th>
						<th className="px-4 py-3 border">Role</th>
						<th className="px-4 py-3 border text-center">Action</th>
					</tr>
					</thead>
					<tbody>
					{[...Array(5)].map((_, i) => (
						<tr key={i}
							className="animate-pulse">
							<td className="px-4 py-3 border">
								<div className="h-4 bg-gray-200 rounded w-12"></div>
							</td>
							<td className="px-4 py-3 border">
								<div className="h-4 bg-gray-200 rounded w-24"></div>
							</td>
							<td className="px-4 py-3 border">
								<div className="h-4 bg-gray-200 rounded w-32"></div>
							</td>
							<td className="px-4 py-3 border">
								<div className="h-4 bg-gray-200 rounded w-16"></div>
							</td>
							<td className="px-4 py-3 border text-center">
								<div className="h-6 bg-gray-200 rounded w-20 mx-auto"></div>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</div>
	);
};