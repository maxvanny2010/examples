#### SSR React: db Prisma

📦 Установка и инициализация проекта
npx create-next-app@latest
npm install --save-dev prisma@latest
npx prisma init

🧹 Форматирование и миграции
npx prisma format
npx prisma migrate dev --name init
npx prisma studio # для просмотра и редактирования данных
npx prisma migrate dev --name fix-email-field
npx prisma migrate reset # сброс и повторная миграция

🔧 Утилиты для разработки
npm install --save-dev tsx@latest
npx prisma generate

```json
{
  "id": 4,
  "name": "User 1",
  "events": [
    {
      "id": 2,
      "eventDate": "2025-08-05T11:11:50.168Z"
    }
  ]
}
```

