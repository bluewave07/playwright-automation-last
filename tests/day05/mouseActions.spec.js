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
    // Your test steps go here
  });

  test("Hover", async ({ page }) => {
    // Your test steps go here
  });

  test("Scroll", async ({ page }) => {
    // Your test steps go here
  });
});
