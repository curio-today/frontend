import { test, expect } from '@playwright/test';

test('app loads', async ({ page }) => {
  const response = await page.goto('/');

  expect(response?.status()).toBeLessThan(400);

  await expect(
    page.locator("header")
  ).toBeVisible();
});


test('app loads without errors', async ({ page }) => {
  page.on('pageerror', error => {
    throw new Error(`JS error: ${error.message}`);
  });

  const response = await page.goto('/');

  expect(response?.status()).toBeLessThan(400);

  await expect(
    page.locator("header")
  ).toBeVisible();
});
