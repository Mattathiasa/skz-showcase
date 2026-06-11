import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--window-size=1440,900', '--use-gl=angle'],
  defaultViewport: { width: 1440, height: 900 },
});
const page = await browser.newPage();
const logs = [];
page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', e => logs.push(`[pageerror] ${e.message}`));

await page.goto('http://localhost:5179/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await new Promise(r => setTimeout(r, 6000)); // let intro + textures load
await page.screenshot({ path: 'scripts/shot-home.png' });

// drag interaction
await page.mouse.move(720, 450);
await page.mouse.down();
for (let i = 0; i < 20; i++) { await page.mouse.move(720 - i * 18, 450 + i * 4); await new Promise(r => setTimeout(r, 16)); }
await page.mouse.up();
await new Promise(r => setTimeout(r, 2500));
await page.screenshot({ path: 'scripts/shot-dragged.png' });

// hover center card
await page.mouse.move(720, 430);
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: 'scripts/shot-hover.png' });

// click card -> transition -> song page
await page.mouse.click(720, 430);
await new Promise(r => setTimeout(r, 2500));
await page.screenshot({ path: 'scripts/shot-songpage.png' });
console.log('URL after click:', page.url());

console.log('--- console logs ---');
for (const l of logs.slice(0, 40)) console.log(l);
await browser.close();
