#!/usr/bin/env node
/**
 * 统一的版本号修改脚本。
 *
 * 用法：
 *   node scripts/bump-version.mjs 1.4.5
 *
 * 会同时改三处，避免出现「油猴头写 1.4.4、面板显示 1.4.3」这种错位：
 *   1. userscript 的 `// @version      x.y.z`
 *   2. userscript 里的 `const localVersion = "x.y.z";`（面板右上角显示的就是它）
 *   3. package.json 的 `version`
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const USCRIPT = join(root, 'cloud-disk-plugin-tamper-monkey.user.js');
const PKG = join(root, 'package.json');

const next = process.argv[2];
if (!next || !/^\d+\.\d+\.\d+$/.test(next)) {
  console.error('用法: node scripts/bump-version.mjs <x.y.z>  例如 1.4.5');
  process.exit(1);
}

const before = {};

// 1. userscript
let script = readFileSync(USCRIPT, 'utf8');
before.header = script.match(/\/\/ @version\s+(\S+)/)?.[1];
before.local = script.match(/const localVersion = "([\d.]+)"/)?.[1];

if (!before.header) {
  console.error('找不到 // @version 行，脚本格式可能被改动过');
  process.exit(1);
}

script = script
  .replace(/(\/\/ @version\s+)\S+/, `$1${next}`)
  .replace(/(const localVersion = ")[\d.]+(")/, `$1${next}$2`);

// 控制台横幅里也带上版本号
script = script.replace(/(\[网盘批量重命名\] v)[\d.]+( 已加载)/, `$1${next}$2`);

writeFileSync(USCRIPT, script, 'utf8');

// 2. package.json
const pkg = JSON.parse(readFileSync(PKG, 'utf8'));
before.pkg = pkg.version;
pkg.version = next;
writeFileSync(PKG, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');

console.log(`版本号已更新 -> ${next}`);
console.log(`  @version        ${before.header} -> ${next}`);
console.log(`  localVersion    ${before.local} -> ${next}`);
console.log(`  package.json    ${before.pkg} -> ${next}`);
console.log('');
console.log('记得在 CHANGELOG.md 顶部补上这一版的改动说明。');
