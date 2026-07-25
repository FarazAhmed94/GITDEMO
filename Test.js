const { test, expect } = require('@playwright/test');

// This is my first program

test.describe('Basic Playwright Demo', () => {

  test('should load a page and check the title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('should navigate and click a link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
  });

  test('should fill a form field', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('test@example.com');
    await page.locator('#userPassword').fill('SamplePass123');
    await expect(page.locator('#userEmail')).toHaveValue('test@example.com');
  });

  console.log("This is my First Program");

});
