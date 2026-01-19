import React from "react";
import {DashboardHeader} from "@/components/DashboardHeader";
import {SideBar} from "@/components/SideBar";

type  Props = {
    children?: React.ReactNode,
}
export default function DashboardLayout({children}: Props) {
    return (
        <div className="min-h-screen flex bg-gray-100">
            <SideBar/>
            <div className="flex-1 flex flex-col">
                <DashboardHeader/>
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
