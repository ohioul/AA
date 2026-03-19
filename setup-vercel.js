#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  console.log('\n🚀 Настройка развертывания на Vercel\n');

  console.log('Откройте https://console.neon.tech\n');
  console.log('Инструкция:');
  console.log('1. Создайте аккаунт (Google или Email)');
  console.log('2. Нажмите "+ New Project"');
  console.log('3. Выберите регион (ближайший)');
  console.log('4. Скопируйте "Connection string" (postgresql://...)');
  console.log('');

  const databaseUrl = await askQuestion('📝 Вставьте DATABASE_URL: ');

  if (!databaseUrl.includes('postgresql://')) {
    console.log('❌ Неправильный формат! Должно начинаться с postgresql://');
    process.exit(1);
  }

  // Обновляем .env.local
  let envContent = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf-8');
  envContent = envContent.replace(
    /^DATABASE_URL=.*/m,
    `DATABASE_URL=${databaseUrl}`
  );
  fs.writeFileSync(path.join(__dirname, '.env.local'), envContent);

  console.log('\n✅ DATABASE_URL установлен!\n');
  console.log('Текущие настройки:');
  console.log(envContent);

  console.log('\n📦 Далее:');
  console.log('1. Запустите: npm run build');
  console.log('2. Затем: npm start');
  console.log('3. Проверьте, что приложение работает');
  console.log('4. Откройте https://vercel.com/new и импортируйте репозиторий');
  console.log('5. При развертывании добавьте переменные из .env.local');

  rl.close();
})();
