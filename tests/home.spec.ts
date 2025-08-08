import { test, expect } from '@playwright/test';

// Basic smoke test for homepage and footer

test.describe('Portfolio Website', () => {
  test('Home page loads and displays main elements', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    // Logo
    await expect(page.locator('img[src="/Logo.png"]')).toBeVisible();
    // Navigation
    await expect(page.getByRole('navigation')).toBeVisible();
    // CTA button
    await expect(page.getByRole('link', { name: /get a quote/i })).toBeVisible();
    // Contact Info
    await expect(page.getByText('+27(0)79 497 2646')).toBeVisible();
    await expect(page.getByText('jacobotha206@gmail.com')).toBeVisible();
  });

  test('Navigation links work', async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const navLinks = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/Services/web-development' },
      { label: 'About', href: '/About' },
      { label: 'Customers', href: '/Customers' },
      { label: 'Contact', href: '/Contact' },
    ];
    for (const { label, href } of navLinks) {
  const link = page.locator(`a[href='${href}']`).first();
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(href);
  await page.goto('/'); // Go back for next link
};

,}};