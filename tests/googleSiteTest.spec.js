const { test , expect } = require("@playwright/test")


test("Google search test", async ({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    //await page.getByTitle('Search').fill('playwright')
    const searchBar = page.getByTitle('Search');
    await searchBar.click();
    await searchBar.fill('aa');
    // let c = await page.getByTitle('Search').inputValue();
    // await expect(c).toEqual('aa');

    await expect (
        await searchBar.inputValue()
    ).toEqual('aa');

    await page.waitForTimeout(2000);

    searchBar.press('Enter');
    await page.waitForTimeout(2000);

    console.log(await page.title());
    await page.waitForTimeout(10000);

})

