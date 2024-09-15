
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

  test('selectOption() used for dropdowns', async ({ page }) => {
    
    page.locator("text='Dropdown'").click();

    let simpleDropDown =page.locator("//select[@id='dropdown']");

   // await page.waitForTimeout(3000);

    // select by value
   // await simpleDropDown.selectOption("1");

   // select by visible text
   // await simpleDropDown.selectOption( { label: "Option 1" } );

    // select by index
    await simpleDropDown.selectOption( { index: 1 } );

    
  //  await page.waitForTimeout(3000);


  });

});

