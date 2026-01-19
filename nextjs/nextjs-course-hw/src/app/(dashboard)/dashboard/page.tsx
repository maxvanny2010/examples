export default async function DashboardPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: "no-store" });
    const posts = await res.json();

    return (
        <div className="space-y-10">

            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Dashboard
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    Overview of system activity and performance
                </p>
            </div>

            {/* KPI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="rounded-2xl border bg-white p-6">
                    <div className="text-sm font-medium text-gray-500">Users</div>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">1,284</div>
                </div>

                <div className="rounded-2xl border bg-white p-6">
                    <div className="text-sm font-medium text-gray-500">Revenue</div>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">$32,450</div>
                </div>

                <div className="rounded-2xl border bg-white p-6">
                    <div className="text-sm font-medium text-gray-500">Errors</div>
                    <div className="mt-2 text-3xl font-semibold text-red-600">3</div>
                </div>

            </div>

            {/* Activity */}
            <section className="rounded-2xl border bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                    Activity
                </h2>
                <ul className="space-y-3 text-sm text-gray-700">
                    <li>New user registered</li>
                    <li>Payment processed</li>
                    <li>System health check passed</li>
                </ul>
            </section>

            {/* Posts */}
            <section className="rounded-2xl border bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                    Recent posts
                </h2>
                <ul className="space-y-3">
                    {posts.slice(0, 5).map((post: any) => (
                        <li
                            key={post.id}
                            className="rounded-xl border p-4 text-sm text-gray-700 hover:bg-gray-50 transition"
                        >
                            {post.title}
                        </li>
                    ))}
                </ul>
            </section>

        </div>
    );
}
