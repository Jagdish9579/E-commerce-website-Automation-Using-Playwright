
import { test,expect } from "@playwright/test";

test('Swag Lab Filters Drop downns', async ({page}) =>{

await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(1000);

await page.locator("//input[@id='user-name']").fill("standard_user");
await page.waitForTimeout(1000);
await page.locator("#password").fill("secret_sauce");
await page.waitForTimeout(1000);
await page.locator("//input[@id='login-button']").click();
await page.waitForTimeout(1000);

 await page.waitForSelector(".inventory_list");

await page.locator("//select[@class='product_sort_container']").selectOption({index:1});
await page.waitForTimeout(1000);

//await page.locator("//select[@class='product_sort_container']").selectOption({});

//await page.waitForTimeout(1000);
await page.locator("//select[@class='product_sort_container']").selectOption("Price (low to high)");
await page.waitForTimeout(1000);
await page.locator("//select[@class='product_sort_container']").selectOption({label:"Price (high to low)"});

//await page.waitForTimeout(1000);


await page.locator("#react-burger-menu-btn").click();
await page.waitForTimeout(1000);


 await page.waitForSelector('#logout_sidebar_link');
 await page.waitForTimeout(1000);
await page.locator("#logout_sidebar_link").click();
await page.waitForTimeout(1000);




await page.close();

})