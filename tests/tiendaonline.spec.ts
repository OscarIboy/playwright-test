import { test, expect } from '@playwright/test';

test('Challenge 1', async ({ page }) => {

    //Go to the online shop
    await page.goto('https://automationexercise.com/');

    //Click on "View Product" of the first product
    await page.hover('.choose > .nav > li > a');
    await page.locator('a:has-text("View Product")').first().click();
    
    //Close Add
    await page.frameLocator('iframe[name="aswift_6"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Close ad' }).click();
    
    //Use the button + to add 3 products to the cart
    await page.locator('#quantity').click();
    await page.locator('#quantity').fill('3');

    //Click on "Add to cart"
    await expect(page.locator('button:has-text("Add to cart")')).toBeVisible();
    await page.locator('button:has-text("Add to cart")').click();

    //Verify that the modal and the text of "Added!" is visible
    await expect(page.locator('modal-title:has-text("Added!")')).toBeVisible();

    //Click on the button of "Continue Shopping"
    await expect(page.locator('button:has-text("Continue Shopping")')).toBeVisible();
    await page.locator('button:has-text("Continue Shopping")').click();

    //Verify that the modal is not visible modal-content
    await expect(page.locator('modal-content')).not.toBeVisible();
});