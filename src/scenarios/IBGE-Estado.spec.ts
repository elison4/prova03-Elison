
import { test, expect } from '@playwright/test';

test('CT03 - Deve apresentar os dados de Santa Catarina', async ({ page }) => {
  await page.goto(
    'https://www.ibge.gov.br/cidades-e-estados/sc.html'
  );

  await expect(
    page.getByRole('heading', {
      name: 'Santa Catarina',
      exact: true
    })
  ).toBeVisible();

  await expect(page.getByText('Código:', { exact: false }))
    .toBeVisible();

  await expect(page.getByText('42', { exact: true }))
    .toBeVisible();

  await expect(page.getByText('Governador'))
    .toBeVisible();
});
