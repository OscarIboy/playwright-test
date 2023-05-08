import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dam.aesirx.io/');
  await page.goto('https://dam.aesirx.io/?visitor_uuid=9f5314b3-85c0-4ad8-a1fa-343baf34ca7d');
  await page.getByRole('img', { name: 'Logo', exact: true }).click();
});