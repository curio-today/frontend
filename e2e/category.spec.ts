import { test, expect } from '@playwright/test';

const categories = [
  { slug: 'amazes', title: 'Amazes' },
  { slug: 'amuses', title: 'Amuses' },
  { slug: 'informs', title: 'Informs' },
  { slug: 'inspires', title: 'Inspires' },
];

for (const { slug, title } of categories) {
  test(`should have title of the category: ${title}`, async ({ page }) => {
    await page.goto(`/${slug}`);
    await expect(
      page.getByRole('heading', { name: title })
    ).toBeVisible();
  });
}
