import { test, expect } from '@playwright/test';

test.describe('izbornik na mobitelu', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) > 980, 'samo mobile');

  test('otvara se, zatvara na Escape i na klik linka', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('.nav-toggle');
    const menu = page.locator('#nav-menu');
    await expect(menu).toBeHidden();
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await btn.click();
    await menu.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL(/\/blog\/$/);
  });
});

test.describe('kontakt obrazac', () => {
  test('prazan obrazac: poruka o grešci i aria-invalid', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('#kontakt form.cform');
    await form.getByRole('button', { name: 'Pošaljite upit' }).click();
    await expect(form.locator('.cform-msg')).toContainText('Upišite ime, kontakt i poruku');
    await expect(form.locator('[name=name]')).toHaveAttribute('aria-invalid', 'true');
    await expect(form.locator('[name=name]')).toBeFocused();
  });

  async function fill(page: import('@playwright/test').Page) {
    await page.goto('/');
    const form = page.locator('#kontakt form.cform');
    await form.locator('[name=name]').fill('Test Korisnik');
    await form.locator('[name=contact]').fill('test@example.com');
    await form.locator('[name=message]').fill('Probni upit');
    return form;
  }

  test('uspješno slanje šalje JSON s poljima i prikazuje potvrdu', async ({ page }) => {
    let body: Record<string, string> = {};
    await page.route('**/api/contact', async (route) => {
      body = route.request().postDataJSON();
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    });
    const form = await fill(page);
    await form.getByRole('button', { name: 'Pošaljite upit' }).click();
    await expect(form.locator('.cform-msg')).toContainText('Upit je poslan');
    expect(body).toMatchObject({ name: 'Test Korisnik', contact: 'test@example.com', message: 'Probni upit', urgency: 'Ovaj tjedan', page: '/' });
    expect(body.subject).toBeTruthy();
  });

  test('greška servera nudi slanje emailom', async ({ page }) => {
    await page.route('**/api/contact', (route) => route.fulfill({ status: 502, body: '' }));
    const form = await fill(page);
    await form.getByRole('button', { name: 'Pošaljite upit' }).click();
    const link = form.locator('.cform-msg a');
    await expect(link).toHaveAttribute('href', /^mailto:info@ideja-it\.hr\?subject=.*Probni%20upit/);
  });
});

test('samoprocjena: provjera nepotpunih odgovora i izračun rezultata', async ({ page }) => {
  await page.goto('/samoprocjena/');
  const groups = page.locator('.q');
  const n = await groups.count();
  expect(n).toBeGreaterThan(5);

  await page.getByRole('button', { name: 'Prikažite rezultat' }).click();
  await expect(page.locator('.sa-err')).toContainText(`Odgovorite još na ${n}`);

  // Sve "da" osim prvog pitanja "ne"
  for (let i = 0; i < n; i++) {
    // Radio pokriva cijelu oznaku; check() ujedno provjerava da ga ništa ne prekriva
    await groups.nth(i).locator(`input[value=${i === 0 ? 'no' : 'yes'}]`).check();
  }
  await expect(page.locator('#done')).toHaveText(String(n));
  await page.getByRole('button', { name: 'Prikažite rezultat' }).click();
  await expect(page.locator('#rezultat')).toBeVisible();
  const score = Number(await page.locator('#score').textContent());
  expect(score).toBeGreaterThan(50);
  expect(score).toBeLessThan(100);
  await expect(page.locator('#top li')).toHaveCount(1);
  await expect(page.locator('#kontakt textarea')).toHaveValue(new RegExp(`Rezultat samoprocjene: ${score}/100`));
});
