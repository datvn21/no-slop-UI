const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || 'playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

let browser;
(async () => {
  browser = await chromium.launch({ channel: 'chrome', headless: true });
  for (const width of [320, 375, 768, 1280, 1920, 2560]) {
    const page = await browser.newPage({ viewport: { width, height: 812 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.resolve(__dirname, 'index.html')).href);
    const size = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }));
    if (size.scroll > size.client) throw new Error(`overflow ${width}: ${JSON.stringify(size)}`);
    if ([768, 1920].includes(width)) await page.screenshot({ path: path.resolve(__dirname, `${width}.png`), fullPage: true });
    if (width === 375) {
      await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
      const enlarged = await page.evaluate(() => ({
        scroll: document.documentElement.scrollWidth,
        client: document.documentElement.clientWidth,
      }));
      if (enlarged.scroll > enlarged.client) throw new Error(`overflow at 200% text: ${JSON.stringify(enlarged)}`);
      await page.screenshot({ path: path.resolve(__dirname, '375-text-200.png'), fullPage: true });
      await page.locator('#book').click();
      const dialogSize = await page.locator('#booking').evaluate(dialog => ({
        scroll: dialog.scrollHeight,
        client: dialog.clientHeight,
        overflow: getComputedStyle(dialog).overflowY,
      }));
      if (dialogSize.scroll > dialogSize.client && !['auto', 'scroll'].includes(dialogSize.overflow)) {
        throw new Error(`dialog clips at 200% text: ${JSON.stringify(dialogSize)}`);
      }
      await page.locator('#confirm').scrollIntoViewIfNeeded();
      if (!await page.locator('#confirm').isVisible()) throw new Error('confirm hidden at 200% text');
      await page.screenshot({ path: path.resolve(__dirname, '375-text-200-dialog.png') });
      await page.keyboard.press('Escape');
      await page.evaluate(() => { document.documentElement.style.fontSize = ''; });
    }
    if (![375, 1280].includes(width)) {
      console.log(`${width}px: no page overflow`);
      await page.close();
      continue;
    }
    await page.locator('#book').click();
    if (!await page.locator('#booking').evaluate(dialog => dialog.open)) throw new Error('dialog did not open');
    await page.keyboard.press('Escape');
    if (await page.locator('#booking').evaluate(dialog => dialog.open)) throw new Error('Escape did not close dialog');
    await page.locator('#book').click();
    await page.locator('#quantity').selectOption('3');
    if (!(await page.locator('#total').innerText()).includes('240.000')) throw new Error('incorrect total');
    await page.screenshot({ path: path.resolve(__dirname, `${width}-dialog.png`) });
    await page.locator('#confirm').click();
    if (!(await page.locator('#book').innerText()).includes('3 vé')) throw new Error('confirmation missing');
    if (errors.length) throw new Error(errors.join('; '));
    console.log(`${width}px: no overflow; dialog, Escape, total, confirmation, JS errors checked${width === 375 ? '; 200% text and dialog scroll checked' : ''}`);
    await page.close();
  }
  await browser.close();
})().catch(async error => { console.error(error); await browser?.close(); process.exitCode = 1; });
