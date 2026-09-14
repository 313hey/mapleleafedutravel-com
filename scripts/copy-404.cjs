const fs = require('node:fs');
const path = require('node:path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (!fs.existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run this after the Vite build finishes.');
}

fs.copyFileSync(indexPath, fallbackPath);
