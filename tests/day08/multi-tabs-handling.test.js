import { expect, test } from '@playwright/test';

test('Opening multiple tabs in a context', async ({ context }) => {
  
    // create pages:
    let googlePage = await context.newPage();

    let youTubePage = await context.newPage();

    await youTubePage.waitForTimeout(3000);

    await googlePage.bringToFront();
    await googlePage.goto("https://www.google.com/");

    await youTubePage.waitForTimeout(3000);

    await expect(googlePage).toHaveTitle("Google");

    let googleSearchBox = googlePage.locator("//textarea[@class='gLFyf']");

    await googleSearchBox.fill("CYDEO");

    await googlePage.waitForTimeout(3000);

    await googleSearchBox.press("Enter");

    await googlePage.waitForTimeout(3000);



    await youTubePage.bringToFront();

    await youTubePage.goto("https://www.youtube.com/")

    await youTubePage.waitForTimeout(3000);

    await expect(youTubePage).toHaveTitle("YouTube");

    let youTubeSearchBox = youTubePage.locator("//input[@id='search']");

    await youTubeSearchBox.fill("CYDEO");

    await youTubePage.waitForTimeout(3000);

    await youTubeSearchBox.press("Enter");


});


test('Random window pop-up handling', async ({ page }) => {
    // Your test steps go here

    
  });