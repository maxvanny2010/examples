export default function HomePage() {
    return (
        <section className="grid md:grid-cols-2 gap-12 items-center">

            <div>
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
                    Build faster with <span className="text-blue-600">Next.js</span>
                </h1>

                <p className="mt-6 text-gray-600 text-lg">
                    Modern architecture. Server components. Real performance.
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition">
                        Get Started
                    </button>

                    <button className="rounded-lg border px-6 py-3 text-sm font-medium hover:bg-gray-50 transition">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-2xl"/>
                <div className="relative bg-white rounded-2xl shadow-xl p-8">
                    <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl"/>
                    <p className="mt-4 text-sm text-gray-500">
                        Your future dashboard preview
                    </p>
                </div>
            </div>

        </section>
    );
}
