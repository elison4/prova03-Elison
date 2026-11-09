
import { test, expect } from '@playwright/test';

test('CT01 - Deve carregar a página inicial do IBGE', async ({ page }) => {
  await page.goto('https://www.ibge.gov.br/');

  await expect(page).toHaveTitle(/IBGE/i);

  await expect(
    page.getByRole('link', { name: /cidades e estados/i }).first()
  ).toBeVisible();
});
