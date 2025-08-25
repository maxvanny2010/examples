import { AiOutlineLock } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { PATH } from '@/shared/path';

export const UnauthorizedCard = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center h-96">
			<div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 max-w-sm">
				<AiOutlineLock className="text-5xl text-red-500 mb-4" />
				<h2 className="text-xl font-semibold text-gray-900">Требуется авторизация</h2>
				<p className="text-gray-600 mt-2 text-center">
					Пожалуйста, войдите в систему, чтобы получить доступ к админ-панели.
				</p>
				<button
					onClick={() => router.push(PATH.AUTH.SIGNIN)}
					className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
				>
					Войти
				</button>
			</div>
		</div>
	);
};
