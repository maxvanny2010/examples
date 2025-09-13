## DOCKER

### install Ubuntu

```yaml
wsl --install -d Ubuntu
```

### check version

```yaml
wsl -l -v
```

[example]

| NAME                | STATE     | VERSION |
|---------------------|-----------|---------|
| docker-desktop      | Running   | 2       |
| docker-desktop-data | Stopped   | 2       |
| Ubuntu              | Installed | 2       |

### run

```yaml
wsl -d Ubuntu
```

# Обновляем пакеты

```yaml
sudo apt update && sudo apt upgrade -y
```

# Ставим curl, если ещё нет

```yaml
sudo apt install -y curl
```

# Добавляем репозиторий Node.js (например, версия LTS 20.x)

```yaml
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

# Устанавливаем Node.js

```yaml
sudo apt install -y nodejs
```

# Проверяем

```yaml
node -v
npm -v
```

### docker

```yaml
 docker -v
sudo docker build -t result .
sudo docker run result
```

### commands

# Docker + Docker Compose (WSL + Node.js) — Мини-шпаргалка

### 🔹 Основные Docker команды

| Команда                                  | Описание                                                     |
|------------------------------------------|--------------------------------------------------------------|
| `docker run -it -p 3000:3000 image_name` | Запустить контейнер интерактивно с пробросом порта 3000      |
| `docker run -d -p 3000:3000 image_name`  | Запустить контейнер в фоне (detached mode) с пробросом порта |
| `docker ps`                              | Показать запущенные контейнеры                               |
| `docker ps -a`                           | Показать все контейнеры, включая остановленные               |
| `docker stop <container_id>`             | Остановить работающий контейнер                              |
| `docker rm <container_id>`               | Удалить остановленный контейнер                              |
| `docker logs <container_id>`             | Посмотреть логи контейнера                                   |
| `docker exec -it <container_id> bash`    | Зайти внутрь контейнера (интерактивный терминал)             |
| `docker build -t image_name .`           | Собрать образ из Dockerfile                                  |
| `docker images`                          | Показать локальные образы                                    |
| `docker rmi <image_id>`                  | Удалить образ                                                |
| `docker image prune -a`                  | Удалить все образы                                           |
| `sudo docker images`                     | grep userHub                                                 |  Проверить образы в хабе                                           |
| `docker pull image_name`                 | Скачать образ из Docker Hub                                  |
| `docker push image_name`                 | Отправить образ в Docker Hub                                 |
| `docker stop $(docker ps -q)`            | Остановить все контейнеры                                    |
| `docker system prune -a --volumes`       | Полная очистка: контейнеры, образы, тома, сети               |

---

### 🔹 Основные Docker Compose команды

| Команда                              | Описание                                                 |
|--------------------------------------|----------------------------------------------------------|
| `docker-compose up`                  | Запустить контейнеры из `docker-compose.yml`             |
| `docker-compose up -d`               | Запустить контейнеры в фоне (detached mode)              |
| `docker-compose down`                | Остановить и удалить все контейнеры, сети и тома Compose |
| `docker-compose ps`                  | Показать статус контейнеров Compose                      |
| `docker-compose logs`                | Посмотреть логи всех сервисов Compose                    |
| `docker-compose build`               | Собрать образы всех сервисов Compose                     |
| `docker-compose stop`                | Остановить контейнеры без удаления                       |
| `docker-compose restart`             | Перезапустить контейнеры                                 |
| `docker-compose exec <service> bash` | Зайти в контейнер конкретного сервиса                    |

---

### 🔹 Советы для Node.js + WSL

1. **Порт пробрасывать обязательно**:

```yaml
   docker run -p 3000:3000 image_name
   docker-compose up -d
```

### 🔹 Код проекта монтировать в контейнер, чтобы видеть изменения без пересборки

```yaml
docker run -it -p 3000:3000 -v /mnt/c/projects/university/docker:/app -w /app image_name
```

### Использовать интерактивный терминал для логов и работы с сервером:

```yaml
docker run -it -p 3000:3000 image_name
docker-compose up
docker-compose exec <service> bash
```

### Dockerfile

```yaml
# Используем официальный Node.js LTS образ
FROM node:20

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Открываем порт 3000
EXPOSE 3000

# Команда для запуска сервера
CMD ["node", "index.js"]

```

### docker-compose.yml

```bash
version: "3.9"

services:
  node-app:
    build: .
    ports:
      - "3000:3000"   # проброс порта на localhost
    volumes:
      - .:/app        # чтобы изменения кода сразу отражались
    stdin_open: true   # для интерактивной работы
    tty: true
    depens_on: some_service
```

### Запуск

```yaml
docker-compose up -d // Собрать и запустить контейнер в фоне
docker-compose logs -f // docker-compose logs -f
docker-compose down // docker-compose down
```

### Удаление

Проверка текущих образов

```yaml
docker images
```

Вывод покажет все локальные образы с IMAGE ID и REPOSITORY.

2️⃣ Удаление всех неиспользуемых образов (без активных контейнеров)

```yaml
docker image prune -a
```

Опция -a → удаляет все образы, которые не используются контейнерами.
Потребует подтверждения y/n.
3️⃣ Удаление всех образов без исключений
Удалить все локальные образы, даже если к ним привязаны контейнеры, сначала останавливаем и удаляем все контейнеры:

```yaml
docker stop $(docker ps -q)
docker rm $(docker ps -a -q)
```

Потом удаляем все образы:

```yaml
docker rmi $(docker images -q)
docker images -q \→ выдаёт список всех IMAGE ID.
docker rmi удаляет каждый из них.
```

4️⃣ Полная очистка (контейнеры, тома, образы, сети)

```yaml
docker system prune -a --volumes
```

# Разделение Docker Compose для разработки и продакшена

### 1️⃣ Структура проекта
project/
├─ src/
├─ Dockerfile
├─ docker-compose.dev.yml # содержит build для локальной разработки
├─ docker-compose.prod.yml # только image для сервера / продакшена
├─ .env

---

### 2️⃣ docker-compose.dev.yml (локальная разработка)

```yaml
services:
  result:
    build: .
    image: mailtime2010/result
    ports:
      - "3000:3000"
    env_file:
      - .env
```
### 3️⃣ docker-compose.prod.yml (сервер / продакшен)
```yaml
services:
  result:
    image: mailtime2010/result:abc1234
    ports:
      - "3000:3000"
    env_file:
      - .env
```
### Как запускать
Локально (разработка, пересборка)
```yaml
docker compose -f docker-compose.dev.yml up --build
```
На сервере (prod, готовые образы)
```yaml
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d

```
### Запуск проекта на VPS с Docker

Ниже приведена последовательность команд, которые использовались для клонирования репозитория, сборки и запуска контейнеров проекта.

---

### 1️⃣ Просмотр структуры проекта локально
```yaml
tree -f
ls -la
sudo apt update && sudo apt install -y tree
tree
```

2️⃣ Подключение к серверу по SSH
```yaml
ssh root@5.129.245.141
# Подтверждаем ключ: yes
# Вводим пароль root
```

3️⃣ Настройка SSH для доступа к GitHub (если используете приватное репо)
```yaml
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
```

4️⃣ Клонирование репозитория на сервер
```yaml
git clone git@github.com:maxvanny2010/docker.git
cd docker
ls
```

5️⃣ Сборка и запуск контейнеров через Docker Compose
```yaml
docker-compose up -d --build
```
⚠️ Может появиться ошибка, если сервисы не имеют контекста сборки или нет Docker Hub авторизации.

6️⃣ Если нужно, удалить старую папку и повторно клонировать
```yaml
cd ..
rm -rf docker
git clone https://github.com/maxvanny2010/docker.git
cd docker
ls
```

7️⃣ Авторизация в Docker Hub (для снятия лимита pull rate)
```yaml
docker login
```
8️⃣ Повторная сборка и запуск контейнеров
```yaml
docker-compose up -d --build
```
9️⃣ Проверка запущенных контейнеров
```yaml
docker ps
```
🔟 Проверка статуса firewall (не обязательно)
```yaml
ufw status
```
1️⃣1️⃣ Остановка контейнеров и сети Docker
```yaml
docker-compose down
```
1️⃣2️⃣ Выход из сервера
```yaml
exit
```