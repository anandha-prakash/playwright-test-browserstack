import { expect } from '@playwright/test';
import { test } from '@base/fixtures';

test('category test 1', async ({ page, CategoryPage }) => {
    await page.goto('/property/?automated=true');
    const h1 = await CategoryPage.header;
    const title = await CategoryPage.compareTitle;
    await expect(h1).toContainText('Find the best');
    await expect(page).toHaveURL(/.*property/);
});