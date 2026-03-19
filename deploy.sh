#!/usr/bin/env bash
set -e

echo "🚀 Начинаем развертывание на Vercel"
echo ""
echo "Убедитесь что у вас:"
echo "✅ Аккаунт на GitHub"
echo "✅ Аккаунт на Vercel"  
echo "✅ Аккаунт на Neon (для БД)"
echo ""

# Проверяем что Vercel CLI установлен
if ! command -v vercel &> /dev/null; then
    echo "📦 Устанавливаем Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "📝 Шаг 1: Подготовка кода"
echo "Убедитесь что .env.local содержит правильно DATABASE_URL из Neon"

# Проверяем .env.local
if grep -q "postgresql://user:password" .env.local; then
    echo "⚠️  Важно! Замените DATABASE_URL в .env.local на реальное значение из Neon"
    echo ""
    echo "Откройте https://console.neon.tech"
    echo "Скопируйте строку подключения"
    exit 1
fi

echo ""
echo "✅ Код готов"
echo ""

# Заливаем на GitHub
echo "📤 Шаг 2: Загрузка на GitHub"
echo "Выполняю: git add . && git commit && git push"
echo ""

git add .
git commit -m "Prepare for Vercel deployment" || echo "Нечего коммитить"
git push origin main

echo ""
echo "✅ Код загружен на GitHub"
echo ""

# Развертываем на Vercel
echo "🌐 Шаг 3: Развертывание на Vercel"
echo ""
vercel

echo ""
echo "✅ Развертывание завершено!"
echo ""
echo "🎉 Приложение доступно по адресу!"
echo ""
echo "Дальше:"
echo "1. После первого развертывания откройте проект в Dashboard Vercel"
echo "2. Перейдите в Settings > Environment Variables"
echo "3. Убедитесь что DATABASE_URL, SESSION_SECRET и NODE_ENV установлены"
echo "4. Если нужно, запустите миграции БД (npm run db:push)"
