# QuestLog: запуск

## 1. Supabase (база данных и вход)

1. Зарегистрируйся на supabase.com и создай проект (New project). Регион выбери поближе, пароль базы сохрани.
2. **Таблица:** SQL Editor → New query → вставь содержимое `supabase-setup.sql` → Run.
3. **Запрет регистрации:** Authentication → Sign In / Providers → выключи «Allow new users to sign up» → Save.
4. **Аккаунт:** Authentication → Users → Add user → Create new user.
   - Email: `твой-логин@questlog.app` (например `ivan@questlog.app`). В приложении вводишь просто `ivan`.
   - Password: твой пароль.
   - Отметь «Auto Confirm User».
   Пароль потом можно поменять там же: Users → нажать на пользователя.
5. **Ключи:** Project Settings → API Keys → скопируй publishable key (`sb_publishable_...`).
   Адрес проекта (Project URL) — на главной странице проекта или в Project Settings → Data API.

## 2. Вписать ключи в приложение

Открой `index.html` в любом текстовом редакторе, найди блок `CONFIG` в начале скрипта и заполни:

```js
const CONFIG = {
  SUPABASE_URL: 'https://abcdefgh.supabase.co',
  SUPABASE_KEY: 'sb_publishable_xxxxxxxx',
  LOGIN_DOMAIN: 'questlog.app',
};
```

Publishable key можно держать в открытом коде: без логина и пароля он не даёт доступа к данным.

## 3. GitHub Pages

1. github.com → New repository → имя `questlog` → Public → Create.
2. «uploading an existing file» → перетащи все файлы из этой папки → Commit changes.
3. Settings → Pages → Branch: `main`, папка `/ (root)` → Save.
4. Через 1–2 минуты сайт откроется по адресу `https://твой-ник.github.io/questlog/`.

Обновить приложение: Add file → Upload files → перетащить новый `index.html` → Commit.

## 4. iPhone

Открой адрес в Safari → «Поделиться» → «На экран Домой». Приложение откроется без адресной строки, с иконкой героя.

## Как работает синхронизация

- Каждое изменение сохраняется на устройстве и через секунду отправляется в облако.
- При возвращении в приложение подтягивается свежая версия с сервера, так что телефон и ПК видят одно и то же.
- Квадратик рядом с ⚙: зелёный — сохранено, жёлтый — отправляется, красный — нет связи (изменения уйдут, когда появится интернет).
- Старый прогресс из браузера при первом входе переносится в облако автоматически.
