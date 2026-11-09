
import { test, expect } from '@playwright/test';

// CT01 - Validar login com sucesso
test('CT01 - Deve realizar login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(
    page.locator('[data-test="title"]')
  ).toHaveText('Products');
});

// CT02 - Validar exibição dos produtos
test('CT02 - Deve exibir os produtos da loja', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const produtos = page.locator('.inventory_item');

  await expect(produtos).toHaveCount(6);

  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();
});

// CT03 - Adicionar produto ao carrinho
test('CT03 - Deve adicionar um produto ao carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();
});
