export default function ActivityPage() {
    const activities = [
        {id: 1, text: "Task #1 Completed", status: "completed", icon: "✅"},
        {id: 2, text: "Task #2 Completed", status: "completed", icon: "✅"},
        {id: 3, text: "Task #3 In Progress", status: "pending", icon: "🕒"},
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                Recent Activity
            </h3>
            <ul className="space-y-3">
                {activities.map((item) => (
                    <li key={item.id}
                        className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs">
                            {item.icon}
                        </span>
                        <span className={item.status === "completed" ? "line-through opacity-50" : "font-medium"}>
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}