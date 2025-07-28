import React from 'react';

interface PackageData {
	name: string;
	version: string;
	description?: string;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
}

interface PackageCardProps {
	data: PackageData;
}

export const PackageCard: React.FC<PackageCardProps> = ({ data }) => {
	return (
		<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto mb-6">
			<h2 className="text-xl font-bold mb-4 text-black">📦 package.json</h2>
			<div className="block bg-gray-200 shadow-lg rounded-lg text-xs text-gray-600 space-y-1">
				<ul className="text-gray-700 text-sm space-y-2 pl-4">
					<li>
						<strong>Name:</strong> {data.name}
					</li>
					<li>
						<strong>Version:</strong> {data.version}
					</li>
					{data.description && (
						<li>
							<strong>Description:</strong> {data.description}
						</li>
					)}
					<li>
						<strong>Dependencies:</strong>{' '}
						{Object.keys(data.dependencies || {}).length}
					</li>
					<li>
						<strong>DevDependencies:</strong>{' '}
						{Object.keys(data.devDependencies || {}).length}
					</li>
				</ul>
			</div>
		</div>
	);
};
