
import { test } from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/");
   });

  test('Check() checks the radio buttons and checkboxes if they havnt been checked yet', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox1 = page.locator("#box1");

    await checkBox1.check();

  });

  test('unchecked() unchecks the radio buttons and checkboxes if they havnt been unchecked yet', async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox2 = page.locator("#box2");

    await checkBox2.uncheck();


  });

  test('', async ({ page }) => {
    
  });
});

