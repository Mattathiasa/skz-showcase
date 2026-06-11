import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--window-size=1440,900', '--use-gl=angle'],
  defaultViewport: { width: 1440, height: 900 },
});
const page = await browser.newPage();
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto('http://localhost:5179/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 5000));

const info = await page.evaluate(() => {
  const g = window.__g;
  if (!g) return { error: 'no __g', canvases: document.querySelectorAll('canvas').length, h1: document.querySelector('h1')?.textContent ?? null, body: document.body.innerText.slice(0, 120) };
  const { cards, camera, group } = g;
  const scales = cards.slice(0, 5).map(c => +c.mesh.scale.x.toFixed(3));
  const dists = cards.slice(0, 5).map(c => +c.mesh.position.length().toFixed(2));
  // find card closest to view center and project to screen
  const v = new g.THREE.Vector3();
  let best = null, bestD = -2;
  for (const c of cards) {
    v.copy(c.mesh.position).applyEuler(group.rotation).normalize();
    const d = v.z * -1; // dot with (0,0,-1)
    if (d > bestD) { bestD = d; best = c; }
  }
  v.copy(best.mesh.position).applyEuler(group.rotation).project(camera);
  const sx = (v.x * 0.5 + 0.5) * innerWidth;
  const sy = (-v.y * 0.5 + 0.5) * innerHeight;
  return {
    fov: camera.fov,
    camPos: camera.position.toArray(),
    nCards: cards.length,
    scales, dists,
    groupRot: [group.rotation.x.toFixed(3), group.rotation.y.toFixed(3)],
    bestSong: best.song.title,
    bestScale: best.mesh.scale.x,
    screen: [Math.round(sx), Math.round(sy)],
    canvases: document.querySelectorAll('canvas').length,
  };
});
console.log(JSON.stringify(info, null, 2));

if (info.screen) {
  await page.mouse.move(info.screen[0], info.screen[1]);
  await new Promise(r => setTimeout(r, 900));
  await page.screenshot({ path: 'scripts/shot-hoverlabel.png' });
  await page.mouse.click(info.screen[0], info.screen[1]);
  await new Promise(r => setTimeout(r, 1100));
  await page.screenshot({ path: 'scripts/shot-transition.png' });
  await new Promise(r => setTimeout(r, 3500));
  console.log('URL after click:', page.url());
  await page.screenshot({ path: 'scripts/shot-songpage.png' });
}
await browser.close();
