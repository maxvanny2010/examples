"use client";

export default function ProfileForm() {
    return (
        <form
            action={async (formData: FormData) => {
                const name = formData.get("name")?.toString();
                if (!name) throw new Error("Username is require.");
                console.log("Saved:", name);
            }}
            className="flex gap-2 items-center flex-wrap"
        >
            <input
                name="name"
                placeholder="Your name"
                className="flex-1 min-w-0 border p-2 rounded"
            />

            <button
                type="submit"
                className="shrink-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Save
            </button>
        </form>
    );
}
