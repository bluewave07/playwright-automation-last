import { expect, test } from '@playwright/test';
import path from 'path';
import fs from "fs";

test('File Download Practice', async ({ page }) => {

    // navigate to https://practice.cydeo.com/download
    await page.goto("https://practice.cydeo.com/download");

    // create event listener for download
    let promisedDwonload = page.waitForEvent("download");

    // click the file to download
    await page.locator("text='SShot.png'").click();

    // getting the download object by resolving the promise
    let download = await promisedDwonload;

    // created path where the file needs to be saed at
    let downloadPath = path.join(__dirname, 'download', download.suggestedFilename());

    // save the downloaded file at the specified path
    await download.saveAs(downloadPath);

    // verified that the file exist
    expect(fs.existsSync(downloadPath)).toBeTruthy();
  
});


test('File Upload Practice', async ({ page }) => {
    
    

});
