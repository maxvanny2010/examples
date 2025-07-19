### SSR Step action renderToPipeableStream

1. renderToPipeableStream умеет отдавать HTML потоком
2. Сначала отдаёт shell (фреймворк + каркас страницы),
3. Потом ждёт загрузку данных в Suspense,
4. Отдаёт содержимое внутри Suspense,
5. Затем закрывает html-документ.
