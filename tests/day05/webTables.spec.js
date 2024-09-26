import { expect, test } from "@playwright/test";

test.describe("WebTables Tests ", () => {


  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
  });

  test("Validate the rows and columns of the webtable", async ({ page }) => {
    // verify that there are AT LEAST 8 rows and 11 columns
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    
    //let rows = table.locator("//tr");
   // expect(await rows.count()).toBeGreaterThanOrEqual(8);

   let rows = await table.locator("//tr").all();
   expect( rows.length >= 8 ).toBeTruthy();

   let columnsOnRow = table.locator("//th");
   expect(await columnsOnRow.count()).toBeGreaterThanOrEqual(11);


  });

  test("Read all the data from the web table", async ({ page }) => {});

  test("Check each checkbxoes on the web table", async ({ page }) => {});


});
