import { test, expect } from '@playwright/test';

test("should navigate to the default locale route", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveURL("/en");
})
