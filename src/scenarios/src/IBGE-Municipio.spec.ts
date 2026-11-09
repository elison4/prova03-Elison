
import { test, expect } from '@playwright/test';

test('CT02 - Deve apresentar os dados de Criciúma', async ({ page }) => {
  await page.goto(
    'https://www.ibge.gov.br/cidades-e-estados/sc/criciuma.html'
  );

  await expect(
    page.getByRole('heading', { name: 'Criciúma', exact: true })
  ).toBeVisible();

  await expect(page.getByText('4204608', { exact: true }))
    .toBeVisible();

  await expect(page.getByText('População no último censo'))
    .toBeVisible();
});
