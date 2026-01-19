"use client"
import {useEffect, useState} from "react";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            let data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers().then(r => r);
    }, []);

    return (
        <div>
            {users.map((user: any) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}