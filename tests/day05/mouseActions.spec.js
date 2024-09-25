import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // create afterEach
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Click", async ({ page }) => {
    await page.click("text='Checkboxes'");
  });

  test("Right Click", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.click("text='Checkboxes'", { button: 'right' });
  });

  test("Double Click", async ({ page }) => {
    await page.dblclick("text='Checkboxes'");
  });

  test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");
   // await page.waitForTimeout(3000);
    // await page.hover("//img[@alt='User Avatar']");

   let elements = await page.locator("//img[@alt='User Avatar']").all();

   for(let each of elements) {
    await page.waitForTimeout(3000);
     await each.hover();
   }


  });

  test("Scroll", async ({ page }) => {
    // Your test steps go here
  });
});

// come back at 7:40 PM EST