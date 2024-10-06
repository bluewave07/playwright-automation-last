import { expect, test } from '@playwright/test';

test('Opening multiple tabs in a context', async ({ context }) => {
  
    // Create a new page in the Playwright context for Google
    let googlePage = await context.newPage();
    
    // Create a new page in the Playwright context for YouTube
    let youTubePage = await context.newPage();
    
    // Wait for 3 seconds to ensure the new pages are fully loaded
    await youTubePage.waitForTimeout(3000);
    
    // Bring the Google page to the front
    await googlePage.bringToFront();
    
    // Navigate to the Google homepage
    await googlePage.goto("https://www.google.com/");
    
    // Wait for 3 seconds after navigating to the Google homepage
    await youTubePage.waitForTimeout(3000);
    
    // Assert that the Google page has the expected title
    await expect(googlePage).toHaveTitle("Google");
    
    // Locate the Google search box using a CSS selector
    let googleSearchBox = googlePage.locator("//textarea[@class='gLFyf']");
    
    // Fill the Google search box with the text "CYDEO"
    await googleSearchBox.fill("CYDEO");
    
    // Wait for 3 seconds after filling the search box
    await googlePage.waitForTimeout(3000);
    
    // Press the Enter key to submit the Google search
    await googleSearchBox.press("Enter");
    
    // Wait for 3 seconds after submitting the search
    await googlePage.waitForTimeout(3000);
    
    // Bring the YouTube page to the front
    await youTubePage.bringToFront();
    
    // Navigate to the YouTube homepage
    await youTubePage.goto("https://www.youtube.com/");
    
    // Wait for 3 seconds after navigating to the YouTube homepage
    await youTubePage.waitForTimeout(3000);
    
    // Assert that the YouTube page has the expected title
    await expect(youTubePage).toHaveTitle("YouTube");
    
    // Locate the YouTube search box using a CSS selector
    let youTubeSearchBox = youTubePage.locator("//input[@id='search']");
    
    // Fill the YouTube search box with the text "CYDEO"
    await youTubeSearchBox.fill("CYDEO");
    
    // Wait for 3 seconds after filling the search box
    await youTubePage.waitForTimeout(3000);
    
    // Press the Enter key to submit the YouTube search
    await youTubeSearchBox.press("Enter");

});


test('Random window pop-up handling', async ({ page }) => {
    


  });