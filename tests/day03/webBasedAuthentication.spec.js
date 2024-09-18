
import { expect, test } from '@playwright/test';

test('By Passing authentication by embdding the credentials in the URL', async ({ page }) => {
  
    //https://username:password@url

    await page.goto('https://admin:admin@practice.cydeo.com/basic_auth');
   // await page.goto('https://practice.cydeo.com/basic_auth');

    await page.waitForTimeout(5000);

    let congrats = page.locator("//p[contains(text(),'Congratulations!')]");

    await expect(congrats).toBeVisible();

});


test('', async ({ page }) => {
  
});


