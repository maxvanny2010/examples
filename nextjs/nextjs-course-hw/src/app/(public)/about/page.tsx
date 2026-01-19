export default function AboutPage() {
    return (
        <section className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">About the project</h1>

            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    This platform is built with modern Next.js architecture using
                    Server Components and scalable layouts.
                </p>

                <p>
                    The goal is simple: clean structure, high performance,
                    and long-term maintainability.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="text-xl font-bold text-blue-600">Fast</div>
                    <p className="mt-2 text-sm text-gray-600">
                        Optimized rendering and caching
                    </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="text-xl font-bold text-blue-600">Scalable</div>
                    <p className="mt-2 text-sm text-gray-600">
                        Enterprise-ready architecture
                    </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="text-xl font-bold text-blue-600">Secure</div>
                    <p className="mt-2 text-sm text-gray-600">
                        Server-side authentication
                    </p>
                </div>
            </div>
        </section>
    );
}
