import { FiLock } from 'react-icons/fi';
import { LoginLink } from '@/components';

export default function ForbiddenPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
			<div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-sm">
				<FiLock className="mx-auto mb-4 text-6xl text-red-500 animate-bounce" />
				<h1 className="text-3xl font-bold mb-2">Доступ запрещен</h1>
				<p className="text-gray-600 mb-6">
					У вас нет прав для просмотра этой страницы.
				</p>
				<LoginLink />
			</div>
		</div>
	);
}
