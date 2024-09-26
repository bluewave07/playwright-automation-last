import { test } from '@playwright/test';

test.describe('WebTables Tests ', () => {
    
    test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/web-tables");
   });

  test('Validate the rows and columns of the webtable', async ({ page }) => {
    
  });

  test('Read all the data from the web table', async ({ page }) => {
    
  });

  test('Check each checkbxoes on the web table', async ({ page }) => {
    
  });
});