import { expect, test } from '@playwright/test';

test('SEP Login', async ({ page }) => {

    const code = Buffer.from("automation-user:123abc").toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${code}`
    });

    await page.goto("https://qa.sep.tdtm.cydeo.com/taws");

    await page.waitForTimeout(5000);

    expect(await page.title()).toContain("Checkout");
  
});