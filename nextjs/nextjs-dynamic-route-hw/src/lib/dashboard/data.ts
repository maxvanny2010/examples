import {cache} from "react";

// fake DB/API)
export const getDashboardData = cache(async () => {
    return {
        user: {name: "Max"},
        updatedAt: new Date().toISOString(),
    };
});
