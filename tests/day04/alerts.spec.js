import { test } from "@playwright/test";

test.describe("Alert Tests", () => {
  // create beforeEach
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Handling JS Alert Test", async ({ page }) => {

  });

  test("Handling JS Confirm Test", async ({ page }) => {

  });

  test("Handling JS Prompt Test", async ({ page }) => {

  });

});
