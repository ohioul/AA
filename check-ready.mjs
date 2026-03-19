import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('\n🚀 Проверка готовности приложения к Vercel\n');

const files = {
  'vercel.json': fs.existsSync('vercel.json'),
  '.env.local': fs.existsSync('.env.local'),
  '.vercelignore': fs.existsSync('.vercelignore'),
  'dist/index.cjs': fs.existsSync('dist/index.cjs'),
  'dist/public/index.html': fs.existsSync('dist/public/index.html'),
};

console.log('📋 Файлы конфигурации:');
Object.entries(files).forEach(([file, exists]) => {
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n✅ Приложение готово к развертыванию!\n');
