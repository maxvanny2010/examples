"use client";

import {useRouter} from "next/navigation";
import React from "react";
import {LoginForm} from "@/components";

export default function AuthLoginPage() {
    const router = useRouter();

    return (
        <div style={overlay}>
            <div style={modal}>
                <button style={closeBtn}
                        onClick={() => router.back()}>
                    ✕
                </button>

                <LoginForm/>
            </div>
        </div>
    );
}

const overlay: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modal: React.CSSProperties = {
    position: "relative",
    width: 380,
    padding: "32px 28px",
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};

const closeBtn: React.CSSProperties = {
    position: "absolute",
    top: 12,
    right: 12,
    border: "none",
    background: "transparent",
    fontSize: 18,
    cursor: "pointer",
    opacity: 0.6,
};
