import { test } from '@playwright/test';

test.describe('Test Group', () => {

    // create a beforeEach
    test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/");
    });


  test('getAttribute() retrives the attribute value', async ({ page }) => {

    console.log(await page.locator("text='A/B Testing'").getAttribute("href")); 

    console.log( await page.locator("text='Home'").getAttribute("class") );

  });


  test('B', async ({ page }) => {
   
  });

  test('C', async ({ page }) => {
    // Test implementation goes here
  });

});
/*
<a class="nav-link" href="/">Home</a>
*/