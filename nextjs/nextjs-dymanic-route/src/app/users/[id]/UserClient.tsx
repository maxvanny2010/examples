"use client";

import {useEffect, useState} from "react";

type User = {
    id: number;
    username: string;
};

export default function UserClient({id}: { id: string }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(setUser)
            .catch(console.error);
    }, [id]);

    // Skeleton / Loading state
    if (!user) {
        return (
            <div className="animate-pulse space-y-2">
                <div className="h-6 w-48 bg-gray-300 rounded"/>
                <div className="h-4 w-32 bg-gray-300 rounded"/>
            </div>
        );
    }

    return (
        <div>
            <p>Here you can see {user.username} detail page.</p>
        </div>
    );
}
