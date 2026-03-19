# 🚀 Быстрая настройка Vercel + PostgreSQL

## Шаг 1: Создайте БД на Neon (2 минуты)

1. Откройте https://console.neon.tech
2. Нажмите "Sign Up" и создайте аккаунт
3. После входа нажмите "+ New Project"
4. В Dashboard скопируйте **Connection String**
   - Выглядит так: `postgresql://user:pass@host/db_name`
5. Вставьте его в файл `.env.local` вместо `postgresql://user:password@localhost:5432/mydb`

## Шаг 2: Проверьте локально

```bash
# Обновите .env.local с вашим DATABASE_URL, потом:
npm run build
npm start
```

Если всё работает, переходите к развертыванию.

## Шаг 3: Развертните на Vercel

### Вариант A: Быстро через веб (рекомендуется)
1. Откройте https://vercel.com/new
2. Выберите GitHub репозиторий
3. При импорте добавьте переменные из `.env.local`:
   - `DATABASE_URL`
   - `SESSION_SECRET`
   - `NODE_ENV=production`
   - `PORT=3000`
4. Нажмите Deploy

### Вариант B: Через CLI
```bash
vercel
# Следуйте инструкциям, введите переменные окружения
```

## Шаг 4: Инициализируйте БД на Vercel

После первого развертывания запустите миграции:
```bash
vercel env pull  # Скачает переменные Vercel локально
npm run db:push  # Применит миграции Drizzle
```

---
**Важно:** Не публикуйте `.env.local` на GitHub!
Vercel автоматически использует переменные, которые вы установили в его dashboard.
