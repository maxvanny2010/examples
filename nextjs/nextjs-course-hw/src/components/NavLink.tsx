"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import React from "react";

type Props = {
    href: string;
    children: React.ReactNode;
};

export const NavLink = ({ href, children }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(
                "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition",
                isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
        >
            {children}
        </Link>
    );
};
