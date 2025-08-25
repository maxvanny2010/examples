import { AiOutlineWarning } from 'react-icons/ai';

export const ForbiddenCard = () => (
	<div className="flex flex-col items-center justify-center h-96">
		<div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 max-w-sm">
			<AiOutlineWarning className="text-5xl text-yellow-500 mb-4" />
			<h2 className="text-xl font-semibold text-gray-900">Access denied.</h2>
			<p className="text-gray-600 mt-2 text-center">
				This page is available to administrators only.
			</p>
		</div>
	</div>
);