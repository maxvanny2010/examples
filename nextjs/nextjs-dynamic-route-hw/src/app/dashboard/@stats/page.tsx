import {getDashboardData} from "@/lib/dashboard";

export default async function StatsPage() {
    const data = await getDashboardData();

    // Formatting the date for a more professional look
    const lastUpdate = new Date(data.updatedAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                System Stats
            </h3>
            <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 text-sm">Active User</span>
                    <span className="text-zinc-900 dark:text-zinc-100">{data.user.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 text-sm">Last Update</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400 text-sm">
                        Today at {lastUpdate}
                    </span>
                </div>
            </div>
            <div className="pt-2">
                <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[65%]"/>
                </div>
                <p className="text-[10px] text-zinc-400 mt-2 italic">Storage usage: 65%</p>
            </div>
        </div>
    );
}