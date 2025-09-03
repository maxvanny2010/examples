import type {FC} from 'react';

// Иконки-заглушки
const CalendarIconSkeleton: FC = () => <div className="h-5 w-5 bg-slate-200 rounded"></div>;
const UsersIconSkeleton: FC = () => <div className="h-6 w-6 bg-slate-200 rounded-full"></div>;

export const EventDetailsSkeleton: FC = () => {
    return (
        // 1. Вся структура и классы полностью скопированы из EventDetail
        // Класс animate-pulse добавляет эффект плавной пульсации
        <main className="min-h-screen bg-slate-50 font-sans antialiased animate-pulse">
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">

                        {/* Заглушка для изображения */}
                        <div className="lg:col-span-2">
                            <div className="w-full h-64 lg:h-full bg-slate-200"></div>
                        </div>

                        {/* Заглушка для деталей */}
                        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col gap-8">

                            {/* Заглушка для заголовка */}
                            <header className="flex flex-col gap-4">
                                <div className="h-10 md:h-12 w-3/4 bg-slate-200 rounded-md"></div>
                                <div className="flex items-center gap-2">
                                    <CalendarIconSkeleton/>
                                    <div className="h-5 w-1/2 bg-slate-200 rounded-md"></div>
                                </div>
                            </header>

                            {/* Заглушка для описания */}
                            <div className="space-y-3">
                                <div className="h-4 bg-slate-200 rounded"></div>
                                <div className="h-4 bg-slate-200 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                            </div>

                            {/* Заглушка для секции участников */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <UsersIconSkeleton/>
                                    <div className="h-7 w-1/3 bg-slate-200 rounded-md"></div>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Генерируем 4 заглушки для участников */}
                                    {Array.from({length: 4}).map((_, index) => (
                                        <li key={index}
                                            className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                                            <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};