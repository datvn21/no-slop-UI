const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || 'playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    for (const width of [320, 375, 768, 1280, 1920]) {
      const page = await browser.newPage({ viewport: { width, height: 820 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(pathToFileURL(path.resolve(__dirname, 'index.html')).href);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      if (overflow) throw new Error(`horizontal overflow at ${width}px`);
      if ([375, 768, 1280, 1920].includes(width)) await page.screenshot({ path: path.resolve(__dirname, `${width}.png`), fullPage: true });
      if (width === 375 || width === 1280) {
        const first = page.locator('details').first();
        await first.locator('summary').click();
        if (!await first.evaluate(el => el.open)) throw new Error(`project detail did not open at ${width}px`);
        await first.locator('summary').press('Enter');
        if (await first.evaluate(el => el.open)) throw new Error(`keyboard detail did not close at ${width}px`);
        if (!await page.locator('a[href="mailto:hello@example.test"]').isVisible()) throw new Error('contact missing');
      }
      if (errors.length) throw new Error(errors.join('; '));
      console.log(`${width}px: no overflow; project and contact checks passed`);
      await page.close();
    }
    const page = await browser.newPage({ viewport: { width: 375, height: 820 }, reducedMotion: 'reduce' });
    await page.goto(pathToFileURL(path.resolve(__dirname, 'index.html')).href);
    const motion = await page.locator('.art-one span').evaluate(el => getComputedStyle(el).transitionDuration);
    if (motion !== '0s') throw new Error(`reduced motion still transitions: ${motion}`);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    if (await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)) throw new Error('horizontal overflow at 200% text');
    await page.screenshot({ path: path.resolve(__dirname, '375-text-200.png'), fullPage: true });
    console.log('375px: reduced motion and 200% text passed');
    await page.close();
    const touch = await browser.newPage({ viewport: { width: 375, height: 820 }, isMobile: true, hasTouch: true });
    await touch.goto(pathToFileURL(path.resolve(__dirname, 'index.html')).href);
    await touch.locator('.project').first().tap();
    const touchTransform = await touch.locator('.art-one span').evaluate(el => getComputedStyle(el).transform);
    if (touchTransform !== 'none') throw new Error(`hover motion leaked to touch: ${touchTransform}`);
    console.log('touch: pointer-only hover motion disabled');
    await touch.close();
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
