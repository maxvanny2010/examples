import {JetBrains_Mono, Poppins} from "next/font/google";
import type {Metadata} from "next";
import React from "react";
import "./globals.css"

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-mono",
});


export const metadata: Metadata = {
    title: "Next App",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en"
              className={`${poppins.variable} ${jetbrainsMono.variable}`}>
        <body className="bg-gray-50 font-sans">
        {children}
        </body>
        </html>
    );
}
