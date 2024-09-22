import { expect, test } from '@playwright/test';

test.describe('Test Group', () => {

  test('Verify that there are exactly 50 link elements within the <ul> element', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let elements = await page.locator("//ul[@class='list-group']/li").all();
    expect(elements.length).toBe(50);

    // another way:
    expect(await page.locator("//ul[@class='list-group']/li").count()).toBe(50);
  });
  

  test('Verify that each of the 50 link elements within the <ul> element is visible', async ({ page }) => {
    
  });

  test('Verify that each of the 50 link elements within the <ul> element is enabled', async ({ page }) => {
   
  });

  test('Verify that each of the 50 link elements within the <ul> element have a valid `href` attribute', async ({ page }) => {
    
  });

});