export default function DashboardLoading() {
    return (
        <div className="space-y-6 p-6">
            <div className="h-10 w-1/3 bg-zinc-200 rounded animate-pulse"/>
            {/* заголовок */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-zinc-200 rounded animate-pulse"/>
                <div className="h-40 bg-zinc-200 rounded animate-pulse"/>
            </div>
            <div className="space-y-4">
                <div className="h-6 bg-zinc-200 rounded animate-pulse w-1/4"/>
                <div className="h-32 bg-zinc-200 rounded animate-pulse"/>
            </div>
        </div>
    );
}
