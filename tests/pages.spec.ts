import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

// Sve stranice iz dist/ (osim 404), kao URL putanje sa završnom kosom crtom.
function pages(dir = 'dist'): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...pages(p));
    else if (name === 'index.html') {
      const rel = relative('dist', dir).split(sep).join('/');
      out.push(rel ? `/${rel}/` : '/');
    }
  }
  return out.sort();
}

const PAGES = pages();

for (const path of PAGES) {
  test.describe(path, () => {
    test('render, scroll, slike, konzola', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

      const res = await page.goto(path, { waitUntil: 'networkidle' });
      expect(res?.status()).toBe(200);

      const { sw, iw } = await page.evaluate(() => ({
        sw: document.documentElement.scrollWidth,
        iw: window.innerWidth,
      }));
      expect(sw, 'horizontalni scroll').toBeLessThanOrEqual(iw);

      const noAlt = await page.$$eval('img:not([alt])', (els) => els.map((e) => (e as HTMLImageElement).src));
      expect(noAlt, 'slike bez alt').toEqual([]);

      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.title()).not.toBe('');
      expect(errors, 'greške u konzoli').toEqual([]);
    });

    test('pristupačnost (axe, WCAG 2.1 AA)', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      const summary = r.violations.map(
        (v) => `${v.id} (${v.impact}): ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' | ')}`,
      );
      expect(summary).toEqual([]);
    });
  });
}

test('interni linkovi ne vode na 404', async ({ page, request }) => {
  const links = new Set<string>();
  for (const path of PAGES) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href') || ''));
    for (const h of hrefs) {
      if (h.startsWith('/') && !h.startsWith('//')) links.add(h.split('#')[0] || '/');
    }
  }
  const broken: string[] = [];
  for (const l of links) {
    const r = await request.get(l);
    if (r.status() >= 400) broken.push(`${l} → ${r.status()}`);
  }
  expect(broken).toEqual([]);
});
