// 由根目錄的 index.html（瀏覽器版，Three.js 走 CDN）產生 www/（App 版，Three.js 打包在本機，可離線）
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const www = join(root, 'www');
mkdirSync(join(www, 'vendor'), { recursive: true });

copyFileSync(join(root, 'node_modules/three/build/three.module.js'), join(www, 'vendor/three.module.js'));

const cdn = /https:\/\/cdn\.jsdelivr\.net\/npm\/three@[^"]+\/build\/three\.module\.js/;
let html = readFileSync(join(root, 'index.html'), 'utf8');
if (!cdn.test(html)) throw new Error('index.html 裡找不到 Three.js 的 CDN 網址');
html = html.replace(cdn, './vendor/three.module.js');
writeFileSync(join(www, 'index.html'), html);

console.log('www/ 已產生');
