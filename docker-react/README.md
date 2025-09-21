## DOCKER REACT HTTPS

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

### Обновляем пакеты

```yaml
sudo apt update && sudo apt upgrade -y
```

### Ставим curl, если ещё нет

```yaml
sudo apt install -y curl
```

### Добавляем репозиторий Node.js (например, версия LTS 20.x)

```yaml
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

### Устанавливаем Node.js

```yaml
sudo apt install -y nodejs
```

### Проверяем

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

## Docker + Docker Compose (WSL + Node.js) — Мини-шпаргалка

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

| Команда                              | Описание                                     |
|--------------------------------------|----------------------------------------------|
| `docker-compose up`                  | Запустить контейнеры из `docker-compose.yml` |
| `docker-compose up -d`               | Запустить контейнеры в фоне (detached mode)  |
| `docker-compose ps`                  | Показать статус контейнеров Compose          |
| `docker-compose logs`                | Посмотреть логи всех сервисов Compose        |
| `docker-compose build`               | Собрать образы всех сервисов Compose         |
| `docker-compose exec <service> bash` | Зайти в контейнер конкретного сервиса        |

## Управление контейнерами Docker Compose

| Команда                             | Пояснение                                                                                                     |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------|
| `docker-compose stop`               | Останавливает все контейнеры, но не удаляет их. Можно потом запустить снова через `docker-compose start`.     |
| `docker-compose start`              | Запускает ранее остановленные контейнеры.                                                                     |
| `docker-compose down`               | Останавливает все контейнеры и удаляет их вместе с сетями, созданными Compose. Образы остаются.               |
| `docker-compose down -v`            | То же, что `down`, но дополнительно удаляет все тома (volume). Данные в них будут потеряны.                   |
| `docker-compose stop <имя_сервиса>` | Останавливает только указанный сервис, остальные продолжают работать. Например: `docker-compose stop result`. |
| `docker-compose restart`            | Перезапускает все контейнеры или конкретный сервис: `docker-compose restart result`.                          |

## Чеклист проверки работы Docker Compose

| Шаг | Команда                                            | Пояснение                                                                            |
|-----|----------------------------------------------------|--------------------------------------------------------------------------------------|
| 1   | `docker-compose exec result netstat -tuln`         | Проверяем, что контейнер `result` слушает нужный порт (должен быть 3000).            |
| 2   | `docker-compose exec result lsof -i -P -n`         | Альтернатива: проверка открытых портов внутри контейнера `result`.                   |
| 3   | `docker-compose logs -f result`                    | Смотрим логи контейнера `result` на наличие ошибок запуска или подключения к `date`. |
| 4   | `docker-compose exec result curl http://date:3005` | Проверяем доступность сервиса `date` из контейнера `result` через Docker-сеть.       |
| 5   | `docker-compose logs -f date`                      | Проверяем, что контейнер `date` запущен и слушает нужный порт.                       |
| 6   | `docker-compose up -d --build`                     | Перезапуск контейнеров с пересборкой образов, если были изменения.                   |
| 7   | `curl http://localhost:3000`                       | Проверяем доступ к приложению с сервера. Должен вернуть HTML/JSON.                   |
| 8   | `sudo ufw status`                                  | Проверяем, открыт ли порт 3000 на сервере (для внешнего доступа).                    |
| 9   | `sudo ufw allow 3000/tcp`                          | Если порт закрыт, открываем его для внешнего доступа.                                |

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

## Разделение Docker Compose для разработки и продакшена

### 1️⃣ Структура проекта

```text
project/
├─ src/
├─ Dockerfile
├─ docker-compose.dev.yml # содержит build для локальной разработки
├─ docker-compose.prod.yml # только image для сервера / продакшена
├─ .env
```

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

Ниже приведена последовательность команд,
которые использовались для клонирования репозитория, сборки и запуска контейнеров проекта.

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

## Полезные команды для работы с SSH

| Команда                                      | Описание                                                                                               |
|----------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `pwd`                                        | Выводит полный путь к текущему рабочему каталогу.                                                      |
| `cd ~`                                       | Переходит в домашний каталог текущего пользователя.                                                    |
| `ls`                                         | Выводит список файлов и каталогов в текущей директории.                                                |
| `ls -a`                                      | Выводит список всех файлов и каталогов, включая скрытые (начинающиеся с точкой).                       |
| `ls -ld ~/.ssh`                              | Выводит подробную информацию (права доступа, владельца, дату) о папке `.ssh`.                          |
| `mkdir -p ~/.ssh`                            | Создаёт папку `.ssh` в домашнем каталоге. Опция `-p` создаёт родительские папки, если их нет.          |
| `chmod 700 ~/.ssh`                           | Устанавливает права доступа `700` (чтение, запись и выполнение только для владельца) для папки `.ssh`. |
| `touch ~/.ssh/authorized_keys`               | Создаёт пустой файл `authorized_keys` в папке `.ssh`.                                                  |
| `chmod 600 ~/.ssh/authorized_keys`           | Устанавливает права доступа `600` (чтение и запись только для владельца) для файла `authorized_keys`.  |
| `cat ~/.ssh/id_rsa-server.pub`               | Выводит содержимое файла `id_rsa-server.pub` (публичный SSH-ключ).                                     |
| `useradd -m -s /bin/bash <имя_пользователя>` | Создаёт нового пользователя, его домашний каталог и назначает ему оболочку `bash`.                     |
| `passwd <имя_пользователя>`                  | Устанавливает или изменяет пароль для указанного пользователя.                                         |
| `usermod -aG sudo <имя_пользователя>`        | Добавляет пользователя в группу `sudo`, что даёт ему права администратора.                             |
| `su - <имя_пользователя>`                    | Переключается на указанного пользователя, загружая его профиль и домашний каталог.                     |
| `exit`                                       | Выходит из текущего сеанса пользователя.                                                               |
| `sudo`                                       | Выполняет команду с правами администратора (`root`).                                                   |
| `rmdir <имя_папки>`                          | Удаляет пустую папку.                                                                                  |
| `rm -rf <имя_папки>`                         | Удаляет папку и всё её содержимое принудительно и без запроса подтверждения.                           |
| `nano <файл>`                                | Открывает текстовый редактор `nano` для редактирования файла.                                          |
| `systemctl restart sshd`                     | Перезапускает сервис SSH-сервера.                                                                      |

## Копирование SSH-ключа в буфер обмена

| **OS**                   | **Команда**                                | **Примечание**                                                                          |
|--------------------------|--------------------------------------------|-----------------------------------------------------------------------------------------|
| Linux                    | `cat ~/.ssh/id_rsa.pub \| xclip -sel clip` | Требуется установленный пакет `xclip` (`sudo apt install xclip`). Альтернатива: `xsel`. |
| macOS                    | `cat ~/.ssh/id_rsa.pub \| pbcopy`          | Утилита `pbcopy` встроена в macOS.                                                      |
| Windows (Git Bash / WSL) | `cat ~/.ssh/id_rsa.pub \| clip`            | Команда `clip` встроена в Windows, работает в Git Bash, WSL и PowerShell.               |

## Команды Linux (для сервера)

| Команда                                        | Описание                                                             |
|------------------------------------------------|----------------------------------------------------------------------|
| `sudo nano <файл>`                             | Открывает файл для редактирования с правами администратора.          |
| `sudo service <служба> restart`                | Перезапускает службу (например, `ssh`).                              |
| `sudo systemctl status <служба>`               | Проверяет статус службы в системах с `systemd`.                      |
| `ls -ld <путь>`                                | Проверяет права доступа и владельца для папки.                       |
| `ls -la <путь>`                                | Показывает скрыте файлы папки.                                       |
| `ls -l <путь>`                                 | Проверяет права доступа и владельца для файла.                       |
| `cat <файл>`                                   | Выводит содержимое файла в терминал.                                 |
| `chmod <права> <файл/папка>`                   | Изменяет права доступа. Например, `700` для папки и `600` для файла. |
| `useradd -m <пользователь>`                    | Создаёт нового пользователя с домашним каталогом.                    |
| `passwd <пользователь>`                        | Устанавливает пароль для пользователя.                               |
| `usermod -aG sudo <пользователь>`              | Добавляет пользователя в группу `sudo`.                              |
| `ssh <пользователь>@<адрес>`                   | Подключается к серверу по SSH.                                       |
| `ssh -i <путь_к_ключу> <пользователь>@<адрес>` | Подключается к серверу по SSH с указанием файла ключа.               |
| `ln -s <источник> <цель>`                      | Создаёт символическую ссылку на файл.                                |
| `rm <файл>`                                    | Удаляет файл.                                                        |
| `exit`                                         | Выходит из текущего сеанса.                                          |

---

## Команды Windows (для вашего компьютера)

| Команда                                     | Описание                                                    |
|---------------------------------------------|-------------------------------------------------------------|
| `whoami`                                    | Показывает имя вашей учетной записи.                        |
| `icacls <файл/папка>`                       | Проверяет права доступа в Windows.                          |
| `icacls <файл> /inheritance:r`              | Удаляет унаследованные права доступа.                       |
| `icacls <файл> /grant:r "<пользователь>:F"` | Дает полные права указанному пользователю.                  |
| `wsl --shutdown`                            | Полностью перезагружает подсистему Windows для Linux (WSL). |
| `cd <путь>`                                 | Переходит в указанную папку.                                |

## Команды Windows (для вашего компьютера)

| Команда                                     | Описание                                                    |
|---------------------------------------------|-------------------------------------------------------------|
| `whoami`                                    | Показывает имя вашей учетной записи.                        |
| `icacls <файл/папка>`                       | Проверяет права доступа в Windows.                          |
| `icacls <файл> /inheritance:r`              | Удаляет унаследованные права доступа.                       |
| `icacls <файл> /grant:r "<пользователь>:F"` | Дает полные права указанному пользователю.                  |
| `wsl --shutdown`                            | Полностью перезагружает подсистему Windows для Linux (WSL). |
| `cd <путь>`                                 | Переходит в указанную папку.                                |

## Использование SSH-ключа через символьную ссылку (WSL)

| Команда                                                     | Объяснение                                                                                                        |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `ls -ld id_rsa_root`                                        | Проверяем атрибуты файла `id_rsa_root`. Видим, что у него были права `-rwxrwxrwx`, что небезопасно для SSH-ключа. |
| `mkdir ~/.ssh_keys`                                         | Создаём отдельную папку `~/.ssh_keys` для хранения ключей — это хорошая практика, чтобы не смешивать с `.ssh`.    |
| `ln -s /mnt/c/projects/id_rsa_root ~/.ssh_keys/id_rsa_root` | Создаём символьную ссылку внутри `~/.ssh_keys`, указывающую на реальный путь ключа (`/mnt/c/...`).                |
| `chmod 600 ~/.ssh_keys/id_rsa_root`                         | Устанавливаем права `600` — только владелец может читать и писать. SSH требует такие права для приватных ключей.  |
| `ssh -i ~/.ssh_keys/id_rsa_root root@00.000.000.000`        | Подключаемся к серверу `0.000.000.000` как `root`, указывая ключ через символьную ссылку.                         |

## Полезные команды Linux с пайпами (`|`) и подробными объяснениями

| Команда                                    | Подробное объяснение                                                                                                                                                                                               |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cat ~/.ssh/id_rsa.pub \| xclip -sel clip` | **`cat ~/.ssh/id_rsa.pub`** — выводит содержимое публичного SSH-ключа в терминал. <br> **`xclip -sel clip`** — берёт этот вывод и копирует в буфер обмена X11 (Linux).                                             |
| `cat ~/.ssh/id_rsa.pub \| pbcopy`          | **`cat ~/.ssh/id_rsa.pub`** — показывает публичный ключ. <br> **`pbcopy`** — копирует вывод в буфер обмена macOS.                                                                                                  |
| `ls -l \| grep ".txt"`                     | **`ls -l`** — выводит подробный список файлов и папок в текущей директории (права, владелец, размер, дата). <br> **`grep ".txt"`** — фильтрует только строки с `.txt`, то есть показывает только текстовые файлы.  |
| `ps aux \| grep nginx`                     | **`ps aux`** — выводит список всех процессов на системе с подробной информацией (пользователь, PID, использование CPU/Memory и командная строка). <br> **`grep nginx`** — ищет процессы, связанные с `nginx`.      |
| `dmesg \| tail -n 20`                      | **`dmesg`** — выводит системный лог ядра (например, ошибки оборудования, драйверов). <br> **`tail -n 20`** — показывает только последние 20 строк, чтобы видеть свежие сообщения.                                  |
| `df -h \| grep "/dev/sda1"`                | **`df -h`** — показывает информацию о всех файловых системах (размер, использование, точка монтирования) в удобочитаемом виде (`-h`). <br> **`grep "/dev/sda1"`** — выбирает только строку с разделом `/dev/sda1`. |
| `cat /var/log/syslog \| less`              | **`cat /var/log/syslog`** — выводит весь системный лог. <br> **`less`** — позволяет пролистывать вывод постранично и удобно читать большие файлы.                                                                  |
| `journalctl -u ssh \| tail -n 50`          | **`journalctl -u ssh`** — выводит журнал systemd для службы SSH. <br> **`tail -n 50`** — показывает последние 50 строк журнала, чтобы быстро увидеть последние события.                                            |
| `ps -ef \| awk '{print $1, $2, $8}'`       | **`ps -ef`** — выводит все процессы в системе с расширенной информацией. <br> **`awk '{print $1, $2, $8}'`** — фильтрует колонки: 1 — пользователь, 2 — PID, 8 — команда, чтобы увидеть только нужные данные.      |
| `find /etc -type f \| wc -l`               | **`find /etc -type f`** — ищет все файлы (`-type f`) в каталоге `/etc`. <br> **`wc -l`** — подсчитывает количество строк в выводе, то есть количество найденных файлов.                                            |

| Шаг | Команда                                                          | Описание                                                                                           |
|-----|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 1   | `sudo kill -9 $(cat /var/run/docker.pid 2>/dev/null) 2>/dev/null | Убивает процесс Docker, который может быть запущен и держать старый PID. Используем `              || true`, чтобы не падать, если PID-файл не существует. |
| 2   | `sudo rm -f /var/run/docker.pid`                                 | Удаляет старый PID-файл, чтобы Docker мог корректно стартовать.                                    |
| 3   | `sudo systemctl daemon-reload`                                   | Перезагружает конфигурацию systemd, чтобы учесть изменения в unit-файлах.                          |
| 4   | `sudo systemctl reset-failed`                                    | Сбрасывает статус ошибок systemd для Docker (иначе повторные попытки запуска могут блокироваться). |
| 5   | `sudo systemctl start docker.socket`                             | Запускает Docker socket — точку входа для API Docker.                                              |
| 6   | `sudo systemctl status docker.socket`                            | Проверяет, что сокет слушает `/var/run/docker.sock`.                                               |
| 7   | `sudo systemctl start docker`                                    | Запускает сервис Docker.                                                                           |
| 8   | `sudo systemctl status docker`                                   | Проверяет статус Docker, показывает ошибки и логи при неудаче.                                     |
| 9   | `sudo journalctl -xeu docker.service --no-pager`                 | Выводит подробные логи сервиса Docker для отладки проблем при запуске.                             |
| 10  | `docker --version`                                               | Проверяет, что установлен Docker корректно.                                                        |
| 11  | `docker info`                                                    | Проверяет, что демон Docker работает и готов к использованию.                                      |

```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker volume ls
docker volume prune
```

## Certification without a pipeline

```yml
EXEC_FOLDER="/path/to/your/project"
cd $EXEC_FOLDER
```

### Шаг 1: Запуск Nginx с временной HTTP-конфигурацией

```yml
echo "Starting Nginx with HTTP config..."
cp nginx/default_http.conf nginx/default.conf
docker compose up -d nginx
```

### Шаг 2: Получение сертификата

```yml
echo "Running Certbot to get certificate..."
docker compose run --rm certbot certonly --webroot -w /var/www/certbot -d yourdomain.com --email you@example.com --agree-tos --no-eff-email --non-interactive
```

#### Шаг 3: Перезапуск Nginx с HTTPS-конфигурацией

```yml
echo "Switching to HTTPS config and restarting Nginx..."
cp nginx/default_https.conf nginx/default.conf
docker compose restart nginx

echo "Process completed."
```

### Script bash

```yaml
  #!/bin/bash
  # Путь к вашей директории
  EXEC_FOLDER="/path/to/your/project"
  cd $EXEC_FOLDER
  # Шаг 1: Запуск Nginx с временной HTTP-конфигурацией
  echo "Starting Nginx with HTTP config..."
  cp nginx/default_http.conf nginx/default.conf
  docker compose up -d nginx

  # Шаг 2: Получение сертификата
  echo "Running Certbot to get certificate..."
  docker compose run --rm certbot certonly --webroot -w /var/www/certbot -d yourdomain.com --email you@example.com --agree-tos --no-eff-email --non-interactive

  # Шаг 3: Перезапуск Nginx с HTTPS-конфигурацией
  echo "Switching to HTTPS config and restarting Nginx..."
  cp nginx/default_https.conf nginx/default.conf
  docker compose restart nginx

  echo "Process completed."
```