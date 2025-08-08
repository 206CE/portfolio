import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'CE_206... CE_206...' }).click();
  await page.getByRole('link', { name: 'Home' }).first().click();
  await page.locator('#headlessui-menu-button-_R_3kclb_').click();
  await page.getByRole('menuitem', { name: 'Web Development' }).click();
  await page.getByRole('link', { name: 'About' }).first().click();
  await page.getByRole('link', { name: 'Customers' }).first().click();
  await page.getByRole('link', { name: 'Contact' }).first().click();
  await page.getByRole('link', { name: 'Get a Quote' }).click();
  await page.getByRole('link', { name: 'Home' }).first().click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Home' }).first().click();
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  const page2 = await page2Promise;
  await page2.goto('https://www.linkedin.com/in/jaco-botha-886b7b95/');
});