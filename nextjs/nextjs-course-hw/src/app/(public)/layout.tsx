import {Header} from "@/components/Header";
import React from "react";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header/>
            <main className="max-w-6xl mx-auto px-6 py-8">
                {children}
            </main>
        </>
    );
}
