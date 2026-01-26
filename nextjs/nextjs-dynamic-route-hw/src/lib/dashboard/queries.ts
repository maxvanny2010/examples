import {cache} from "react";

export const getTasks = cache(async () => {
    const res = await fetch("https://api.example.com/tasks", {
        next: {tags: ["tasks"]},
    });
    return res.json();
});
