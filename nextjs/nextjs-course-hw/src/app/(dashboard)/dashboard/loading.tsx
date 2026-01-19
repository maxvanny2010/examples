export default function DashboardLoading() {
    return (
        <div className="space-y-8 p-8 animate-pulse">
            {/* Заголовок */}
            <div className="h-8 w-1/4 bg-gray-300 rounded"></div>

            {/* Верхние карточки */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-200 rounded-xl h-32"></div>
                <div className="p-6 bg-gray-200 rounded-xl h-32"></div>
                <div className="p-6 bg-gray-200 rounded-xl h-32"></div>
            </div>

            {/* Блок активности */}
            <div className="bg-gray-200 rounded-xl p-6 space-y-3 h-48">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
        </div>
    );
}
