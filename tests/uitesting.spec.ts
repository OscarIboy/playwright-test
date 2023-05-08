import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');

  await page.locator('#title');
  await page.locator('.alert');
  await page.locator('a.navbar-brand').click();

  // await page.goto('http://uitestingplayground.com/');
  // //await page.getByRole('link', { name: 'Resources' }).click();
  // await page.locator('a.nav-link:has-text("Resources")').click();
  // await page.getByRole('heading', { name: 'Resources' }).click();
  // //await page.getByRole('link', { name: 'Home' }).click();
  // await page.locator('a.nav-link:has-text("Home")').click();
  // await page.getByText('Quality is not an act, it is a habit.').click();
  // await page.getByRole('link', { name: 'Click' }).click();
  // await page.getByRole('button', { name: 'Button That Ignores DOM Click Event' }).click();
});