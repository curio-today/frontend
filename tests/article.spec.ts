import { test, expect } from '@playwright/test';

const articles = [
    { 
        slug: "informs/69384eb8aa8eef13abce68e4", 
        headline: "Netflix reimagines Cinderella: her stepsisters get their own animated movie",
        lead: "The 2026 release Steps will give Lilith and Margot a chance to tell their side of the story.",
        imageSrc: "/_next/image?url=https%3A%2F%2Fadmin.curio.today%2Fapi%2Fmedia%2Ffile%2Fimage-407.webp&w=3840&q=75",
    },
    { 
        slug: "amuses/692eeb9d02ae732b8890c111", 
        headline: "Could Humans Ever Become Oil? Scientists Say It's Almost Impossible",
        lead: "Fossil fuels come from ancient plants and microscopic organisms — not organisms like us.",
        imageSrc: "/_next/image?url=https%3A%2F%2Fadmin.curio.today%2Fapi%2Fmedia%2Ffile%2Fimage-380.webp&w=3840&q=75",
    },
    { 
        slug: "inspires/692eecb202ae732b8890c39b", 
        headline: "Scientists Challenge Freud’s Theory on Suppressing Negative Thoughts",
        lead: "New research suggests that consciously suppressing unpleasant thoughts may not harm mental health — and may even reduce anxiety.",
        imageSrc: "/_next/image?url=https%3A%2F%2Fadmin.curio.today%2Fapi%2Fmedia%2Ffile%2Fimage-381.webp&w=3840&q=75",
    },
    { 
        slug: "amazes/691f303402ae732b88900def", 
        headline: "Scientists identify a hidden cause of chronic fatigue that standard tests fail to detect",
        lead: "A new study uncovers subtle breathing dysfunctions in patients with CFS that may worsen fatigue and post-exertional symptoms.",
        imageSrc: "/_next/image?url=https%3A%2F%2Fadmin.curio.today%2Fapi%2Fmedia%2Ffile%2Fimage-343.webp&w=3840&q=75"
    },
]

for (const { slug, headline, lead, imageSrc } of articles) {
  test(`should article has headline: ${headline}`, async ({ page }) => {
    await page.goto(`/${slug}`);
    await expect(
      page.getByRole('heading', { name: headline })
    ).toBeVisible();
  });

  test(`should article has lead: ${lead}`, async ({ page }) => {
    await page.goto(`/${slug}`);

    const leadH3 = page.locator("h3").first();

    await expect(leadH3).toHaveText(lead);
  })

  test(`should article has image: ${headline}`, async ({ page }) => {
    await page.goto(`/${slug}`);

    const img = page.locator("img").first();

    await expect(img).toHaveAttribute("src", imageSrc);
  })
}
