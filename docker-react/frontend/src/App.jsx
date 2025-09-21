import {useEffect, useState} from "react";
import {fetchDateFromServer} from "./api/dateService";
import "../static/css/style.css";

function App() {
    const [date, setDate] = useState("Loading date...");
    const [loading, setLoading] = useState(false);

    const updateDate = async () => {
        try {
            setLoading(true);
            const formattedDate = await fetchDateFromServer();
            setDate(formattedDate);
        } catch (error) {
            console.error("Error fetching date:", error);
            setDate("Error fetching date.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        updateDate().then(r => r);
    }, []);

    return (
        <main className="page">
            <div className="container">
                <h1>Result Service 🚀</h1>
                <p>Current date-time from date-service:</p>
                <p className="date-output">
                    <span id="date">{date}</span>
                </p>
                <button
                    className="refresh-btn"
                    onClick={updateDate}
                    disabled={loading}
                >
                    {loading ? "Updating..." : "🔄 Update date-time"}
                </button>
            </div>
        </main>
    );
}

export default App;
