import { test,expect } from "@playwright/test";

test('Swag Lab Filters Drop downns', async ({page, context}) =>{

await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(1000);

await page.locator("//input[@id='user-name']").fill("standard_user");
await page.waitForTimeout(1000);
await page.locator("#password").fill("secret_sauce");
await page.waitForTimeout(1000);
await page.locator("//input[@id='login-button']").click();
await page.waitForTimeout(1000);


  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Waits for a new tab to open
    page.locator('a[href*="linkedin.com"]').click()
  ]);

  // Wait for the LinkedIn page to load
  await newPage.waitForLoadState();
  console.log("Navigated to LinkedIn:", await newPage.title());

  // Close LinkedIn tab
  await newPage.close();


 

await page.locator("#react-burger-menu-btn").click();
await page.waitForTimeout(1000);

 await page.waitForSelector('#logout_sidebar_link');
 await page.waitForTimeout(1000);
await page.locator("#logout_sidebar_link").click();
await page.waitForTimeout(1000);




await page.close();

})