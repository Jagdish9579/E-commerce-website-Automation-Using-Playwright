import { test,expect } from "@playwright/test";

test('Swag Lab', async ({page}) =>{

    //test.setTimeout(120000);
await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(1000);

await page.locator("//input[@id='user-name']").fill("standard_user");
await page.waitForTimeout(1000);
await page.locator("#password").fill("secret_sauce");
await page.waitForTimeout(1000);
await page.locator("//input[@id='login-button']").click();
await page.waitForTimeout(1000);

await page.locator("#react-burger-menu-btn").click();
await page.waitForTimeout(1000);


 await page.waitForSelector('#logout_sidebar_link');
 await page.waitForTimeout(1000);
await page.locator("#logout_sidebar_link").click();
await page.waitForTimeout(1000);










}

)