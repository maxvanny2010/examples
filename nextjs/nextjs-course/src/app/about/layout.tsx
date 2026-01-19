import React from "react";

type AboutLayoutProps = {
    children: React.ReactNode;
}

export default function AboutLayout({children}: AboutLayoutProps) {
    return (<>
            <div>About wrapper layout:</div>
            <hr/>
            <div>{children}</div>
            <hr/>
        </>
    )
}