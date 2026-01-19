export default function SettingsLoading() {
    return (
        <div className="p-8 space-y-4 animate-pulse">
            {/* Заголовок */}
            <div className="h-8 bg-gray-300 rounded w-1/4"></div>

            {/* Настройки формы */}
            <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 mt-6">
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}
