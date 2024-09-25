import { test } from '@playwright/test';

test('sep practice', async ({ page }) => {
    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${code}`
    });


    await page.goto(process.env.SEP_URL);

    let first_name_input = page.locator("//input[@formcontrolname='firstName']");

    let last_name_input = page.locator("//input[@formcontrolname='lastName']");

    let email_input = page.locator("//input[@formcontrolname='email']");

    let phone_input = page.locator("//input[@formcontrolname='phoneNumber']");

    await first_name_input.fill("John");

    await last_name_input.fill("Smith");

    await email_input.fill("johnsmith@example.com");

    await phone_input.fill("1234567890");

    let how_did_you_hear_dropdown = page.locator("//mat-label[text()='How did you hear about us?']");

    let email_option = page.locator("//span[text()='Email']");

    await how_did_you_hear_dropdown.click();


    await email_option.click();

    let next_button = page.locator("//button[@type='submit' and text()=' Next']");

    next_button.click();

    await page.waitForTimeout(3000);

});