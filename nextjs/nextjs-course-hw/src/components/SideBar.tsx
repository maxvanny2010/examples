"use client";

import {NavLink} from "@/components/NavLink";

export const SideBar = () => {
    return (
        <aside className="w-64 shrink-0 border-r bg-white px-6 py-8">
            <div className="mb-8 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Navigation
            </div>

            <nav className="space-y-1">
                <NavLink href="/dashboard">Overview</NavLink>
                <NavLink href="/dashboard/analytics">Analytics</NavLink>
                <NavLink href="/dashboard/settings">Settings</NavLink>
            </nav>
        </aside>
    );
};
