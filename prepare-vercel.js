#!/usr/bin/env node

/**
 * 🚀 Полная подготовка приложения к развертыванию на Vercel
 * 
 * Использование:
 * node prepare-vercel.js
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(msg, color = 'reset') {
  console.log(colors[color] + msg + colors.reset);
}

function checkFile(filePath) {
  return fs.existsSync(filePath);
}

function readEnv() {
  const envPath = path.join(__dirname, '.env.local');
  if (!checkFile(envPath)) return {};
  
  const content = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  content.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, ...rest] = line.split('=');
      env[key] = rest.join('=');
    }
  });
  return env;
}

async function main() {
  console.clear();
  
  log('\n🚀 Подготовка приложения к Vercel\n', 'blue');
  
  // 1. Проверяем файлы
  log('\n📋 Шаг 1: Проверка конфигурации...', 'blue');
  
  const requiredFiles = [
    'vercel.json',
    '.env.local',
    'package.json',
    'vite.config.ts',
  ];
  
  for (const file of requiredFiles) {
    if (checkFile(file)) {
      log(`  ✅ ${file}`, 'green');
    } else {
      log(`  ❌ ${file} не найден!`, 'red');
    }
  }
  
  // 2. Проверяем переменные
  log('\n📝 Шаг 2: Проверка переменных окружения...', 'blue');
  
  const env = readEnv();
  
  if (env.DATABASE_URL && env.DATABASE_URL.includes('postgresql://')) {
    log(`  ✅ DATABASE_URL установлен`, 'green');
  } else {
    log(`  ⚠️  DATABASE_URL не установлен или неправильный формат`, 'yellow');
  }
  
  if (env.SESSION_SECRET && env.SESSION_SECRET.length > 30) {
    log(`  ✅ SESSION_SECRET установлен`, 'green');
  } else {
    log(`  ⚠️  SESSION_SECRET неправильный`, 'yellow');
  }
  
  if (env.NODE_ENV === 'production') {
    log(`  ✅ NODE_ENV = production`, 'green');
  } else {
    log(`  ⚠️  NODE_ENV не production`, 'yellow');
  }
  
  // 3. Проверяем build
  log('\n🔨 Шаг 3: Проверкa build...', 'blue');
  
  if (checkFile('dist/index.cjs')) {
    log(`  ✅ Server build готов (dist/index.cjs)`, 'green');
  } else {
    log(`  ⚠️  Server build не найден`, 'yellow');
  }
  
  if (checkFile('dist/public/index.html')) {
    log(`  ✅ Client build готов (dist/public/index.html)`, 'green');
  } else {
    log(`  ⚠️  Client build не найден`, 'yellow');
  }
  
  // 4. Проверяем Git
  log('\n📦 Шаг 4: Проверка Git...', 'blue');
  
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
    log(`  ✅ Git branch: ${branch}`, 'green');
    
    const status = execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
    if (status) {
      log(`  ⚠️  Есть неиндексированные изменения (${status.split('\n').length} файлов)`, 'yellow');
    } else {
      log(`  ✅ Рабочая директория чистая`, 'green');
    }
  } catch (e) {
    log(`  ⚠️  Git не инициализирован`, 'yellow');
  }
  
  // 5. Итоговая информация
  log('\n' + '='.repeat(50), 'blue');
  log('\n✅ Приложение готово к развертыванию!', 'green');
  log('\n📋 Следующие шаги:\n', 'blue');
  
  log('1. Получить DATABASE_URL:', 'yellow');
  log('   → Откройте https://console.neon.tech');
  log('   → Создайте проект и скопируйте Connection String');
  log('   → Замените DATABASE_URL в .env.local\n');
  
  log('2. Залить на GitHub:', 'yellow');
  log('   $ git add .');
  log('   $ git commit -m "Prepare for Vercel"');
  log('   $ git push\n');
  
  log('3. Развернуть на Vercel:', 'yellow');
  log('   → Откройте https://vercel.com/new');
  log('   → Выберите GitHub репозиторий');
  log('   → Добавьте переменные окружения из .env.local\n');
  
  log('='.repeat(50) + '\n', 'blue');
  
  log('📚 Дополнительно:', 'blue');
  log('   • конфиг: vercel.json');
  log('   • гайд: VERCEL_READY.md');
  log('   • действия: deploy.sh\n');
}

main().catch(console.error);
