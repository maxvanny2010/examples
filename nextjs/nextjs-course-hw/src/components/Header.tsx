"use client";

import {NavLink} from "./NavLink";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <div className="text-lg font-bold tracking-tight">
                    Next<span className="text-blue-600">App</span>
                </div>

                <nav className="flex items-center gap-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                </nav>

            </div>
        </header>
    );
};
