import React from "react";

type DashboardLayoutProps = {
    children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <>
            <div>Common dashboard layout</div>
            <div>{children}</div>
        </>
    )
}