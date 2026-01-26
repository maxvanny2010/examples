"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    {href: "/", label: "Home"},
    {href: "/blog", label: "Blog"},
    {href: "/dashboard", label: "Dashboard"},
];

export function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-1 items-center">
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                            isActive
                                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        )}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}