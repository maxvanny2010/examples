### SSR Step action

✅ Пошаговый процесс SSR + Hydration в React:

1. Браузер отправляет GET-запрос на `"/"`.
2. Пользователь вводит URL (например, `http://localhost:3000/`).
3. Браузер делает HTTP-запрос на сервер.
4. Сервер принимает запрос.
5. Express получает запрос на `/`.
6. Сервер обрабатывает запрос
7. Читает index.html.
8. Выполняет renderToString(`<App />`) — рендер React-компонента в строку HTML.
9. Вставляет HTML внутрь index.html в `div#root`.
10. Возвращает итоговую HTML-страницу в браузер.
11. Браузер принимает HTML.
12. Отображает разметку на экране (SSR).
13. Обнаруживает в `<script src="/bundle.js">` подключение клиентского JS.
14. Автоматически делает GET-запрос за `bundle.js`.
15. Сервер принимает запрос за `bundle.js`.
16. Express использует `express.static('./dist')`.
17. Ищет файл `bundle.js` в папке `./dist` и отдаёт его браузеру.
18. Браузер получает `bundle.js`.
19. Выполняет JS-код из него.
20. Вызов `hydrateRoot(...)` "оживляет" уже отрендеренный HTML:
21. Подключает обработчики событий.
22. Восстанавливает состояние (`useState, useEffect и т. д.`).
23. Страница становится интерактивной.
24. React-приложение работает как SPA.
25. Всё интерактивное поведение (кнопки, хуки) теперь активно.


1. Browser. makes a request.
2. Server. receives the request.
3. Server. processes the request: it reads the index.html, renders the React component to a string, inserts this string
   into the HTML, and sends the resulting HTML page back to the browser.
4. Browser. receives the page, reads and displays it, then requests the JavaScript bundle specified in the `<script>`
   tag from the server.
5. Server. receives the request for the bundle, retrieves it from the static dist folder, and sends it back to the
   browser.
6. Browser. receives the bundle, and the page becomes interactive — React hooks and event handlers start working.
7. Browser. is now fully functional and interactive.

### Cache SSR

npm install --save-dev esbuild-plugin-file-hash

```js
app.use(express.static('dist', {
	maxAge: '1y', // говорим браузеру: кэшируй на год
	immutable: true,
}));
```

```bash
 npm init -y
 npm install react react-dom express esbuild
 npm run build
 npm start
 npm install --save-dev esbuild-plugin-manifest for cache
```
