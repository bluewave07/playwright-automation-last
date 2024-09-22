import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
  });

  test("Locate the iframe by ID", async ({ page }) => {

     let myFrame = page.frameLocator("#mce_0_ifr");  // locating the iframe

     // pause for 3 seconds
      await page.waitForTimeout(3000);
     
     let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']"); // locating the element that's inside the iframe
    
     await elementInsideTheFrame.clear(); 

     await page.waitForTimeout(3000);

     await elementInsideTheFrame.fill("Hello CYDEO");

     await page.waitForTimeout(3000);

     expect(await elementInsideTheFrame.innerText()).toBe("Hello CYDEO");

     await expect(elementInsideTheFrame).toHaveText("Hello CYDEO");

  });

  test("Locate the frame by CSS", async ({ page }) => {
     let myFrame = page.frameLocator("iframe.tox-edit-area__iframe");
     let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");
     

  });

  test("C", async ({ page }) => {
    // Test implementation goes here
  });


});


/*
<body id="tinymce" class="mce-content-body " data-id="mce_0" aria-label="Rich Text Area. Press ALT-0 for help." contenteditable="true" spellcheck="false"><p>Your content goes here.</p></body>
*/