export default function AnalyticsLoading() {
    return (
        <div className="p-8 space-y-6 animate-pulse">
            {/* Заголовок */}
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>

            {/* Подзаголовки / карточки */}
            <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
            </div>

            {/* График */}
            <div className="h-64 bg-gray-200 rounded"></div>

            {/* Дополнительные блоки */}
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
        </div>
    );
}
