import React, {Suspense} from "react";
import {StatSkeleton} from "@/components/stat/StatSkeleton";
import {ActivitySkeleton} from "@/components/activity/ActivitySkeleton";

export default function DashboardLayout({
                                            children,
                                            stats,
                                            activity,
                                        }: {
    children: React.ReactNode;
    stats: React.ReactNode;
    activity: React.ReactNode;
}) {
    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <h4 className="text-2xl font-bold mb-4">Dashboard</h4>
            </header>

            <Suspense fallback={<StatSkeleton/>}>
                {stats}
            </Suspense>

            <Suspense fallback={<ActivitySkeleton/>}>
                {activity}
            </Suspense>

            <div className="bg-white dark:bg-zinc-950 border p-6 rounded-2xl">
                {children}
            </div>
        </div>
    );
}