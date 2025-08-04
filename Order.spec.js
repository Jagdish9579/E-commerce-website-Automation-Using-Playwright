import { test,expect } from "@playwright/test";

test('Swag Lab Order', async ({page}) =>{

    //test.setTimeout(120000);
await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(1000);

await page.locator("//input[@id='user-name']").fill("standard_user");
await page.waitForTimeout(1000);
await page.locator("#password").fill("secret_sauce");
await page.waitForTimeout(1000);
await page.locator("//input[@id='login-button']").click();
await page.waitForTimeout(1000);


await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
await page.waitForTimeout(1000);

await page.locator("//button[@id='remove-sauce-labs-backpack']").click();
await page.waitForTimeout(1000);

await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
await page.waitForTimeout(1000);

await page.locator("//span[@class='shopping_cart_badge']").click();
await page.waitForTimeout(1000);

await page.locator("//*[@id='checkout']").click();
await page.waitForTimeout(1000);

await page.getByPlaceholder('First Name').fill('Jagdish');
await page.getByPlaceholder('Last Name').fill('Jangid');
await page.getByPlaceholder('Zip/Postal Code').fill('411003');
await page.waitForTimeout(1000);


await page.getByRole('button', { name: 'Continue' }).click();
await page.waitForTimeout(1000);



await page.getByRole('button', { name: 'Finish' }).click();
await page.waitForTimeout(1000);


await page.getByRole('button', { name: 'Back Home' }).click();
await page.waitForTimeout(1000);


await page.locator("#react-burger-menu-btn").click();
await page.waitForTimeout(1000);


 await page.waitForSelector('#logout_sidebar_link');
 await page.waitForTimeout(1000);
await page.locator("#logout_sidebar_link").click();
await page.waitForTimeout(1000);




await page.close();






}

)