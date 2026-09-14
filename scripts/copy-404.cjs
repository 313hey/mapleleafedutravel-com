const fs = require('node:fs');
const path = require('node:path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');
const programPages = [
  'programs/school-immersion',
  'programs/travel-to-china',
  'programs/chinese-language',
];

if (!fs.existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run this after the Vite build finishes.');
}

fs.copyFileSync(indexPath, fallbackPath);

for (const page of programPages) {
  const pageDir = path.join(distDir, page);
  fs.mkdirSync(pageDir, { recursive: true });
  fs.copyFileSync(indexPath, path.join(pageDir, 'index.html'));
}
