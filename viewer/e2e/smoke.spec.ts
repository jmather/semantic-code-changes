import { expect, test } from "@playwright/test";

test("a browser renders a page", async ({ page }) => {
  await page.setContent("<main><h1>composable-reviews</h1></main>");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("composable-reviews");
});
