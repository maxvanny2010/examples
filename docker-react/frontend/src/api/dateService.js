const RESULT_SERVER_HOST = import.meta.env.VITE_RESULT_SERVER_HOST;

export async function fetchDateFromServer() {
    if (!RESULT_SERVER_HOST) {
        throw new Error("VITE_RESULT_SERVER_HOST is not defined in the environment.");
    }

    const response = await fetch(RESULT_SERVER_HOST);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.date) {
        return new Date(data.date).toLocaleString("en-En", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    }

    throw new Error("Date field not found in response.");
}
