// e2e/contact.spec.ts
import { test, expect } from "@playwright/test";

const OLD_ADDRESS = /법원로8길|8-gil|法院路8街/;

const cases = [
  { locale: "ko", address: "법원로11길 25, H비지니스파크 A동 1007호" },
  { locale: "en", address: "25 Beopwon-ro 11-gil" },
  { locale: "ja", address: "法院路11街25番地" },
  { locale: "zh", address: "25 Beopwon-ro 11-gil" },
];

for (const { locale, address } of cases) {
  test(`/${locale}/contact shows the new office address`, async ({ page }) => {
    await page.goto(`/${locale}/contact`);
    await expect(page.getByText(address).first()).toBeVisible();
    await expect(page.locator("body")).not.toContainText(OLD_ADDRESS);
  });
}

test("/ko/contact map embed points at the office coordinates", async ({ page }) => {
  await page.goto("/ko/contact");
  const src = await page.locator('iframe[src*="google.com/maps"]').first().getAttribute("src");
  expect(src).toContain("q=37.4848125,127.1163594");
});

test("/ko JSON-LD has the new street address and postal code", async ({ page }) => {
  await page.goto("/ko");
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const org = blocks.map((b) => JSON.parse(b)).flat().find((j) => j.address);
  expect(org.address.streetAddress).toContain("법원로11길 25");
  expect(org.address.postalCode).toBe("05836");
});
