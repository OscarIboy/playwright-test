import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {

    //Go to
    await page.goto('http://uitestingplayground.com/textinput');

    //verify input is visible
    await expect(page.locator('#newButtonName')).toBeVisible();

    //select input and fill the input your text
    await page.locator('#newButtonName').fill('Oscar');

    //pause in dev local
    await page.pause();

    //click in button
    await page.locator('#updatingButton').click();

    //verify button text updated
    await expect(page.locator('#updatingButton')).toContainText('Oscar');
});