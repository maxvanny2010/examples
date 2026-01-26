import {Suspense} from "react";
import {getTasks} from "@/lib/blog/queries";
import {applyOps} from "@/lib/dashboard/applyOps";
import TaskList from "@/components/dashboard/TaskList";
import {TaskSkeleton} from "@/components/dashboard";
import ProfileForm from "@/components/blog/ProfileForm";

export default async function DashboardPage({
                                                searchParams
                                            }: {
    searchParams: Promise<{ ops?: string }>;
}) {
    // Fetch data and resolve searchParams (Next.js 15+ pattern)
    const tasks = await getTasks();
    const resolvedParams = await searchParams;

    const ops = resolvedParams.ops?.split(",") || [];
    const projectedTasks = applyOps(tasks, ops);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="space-y-1">
                <p className="text-zinc-500 dark:text-zinc-400">
                    Manage your personal tasks and profile settings.
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-[280px_1fr]">
                {/* Sidebar: Profile Settings */}
                <aside className="space-y-6">
                    <section className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                            Profile
                        </h2>
                        <ProfileForm/>
                    </section>
                </aside>

                {/* Main Content: Task Management */}
                <main className="space-y-6">
                    <section className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                <span className="text-green-500">✓</span> Your Tasks
                            </h2>
                            <span className="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-500">
                                {projectedTasks.length} total
                            </span>
                        </div>

                        <Suspense fallback={<TaskSkeleton/>}>
                            <TaskList initialTasks={projectedTasks}/>
                        </Suspense>
                    </section>
                </main>
            </div>
        </div>
    );
}