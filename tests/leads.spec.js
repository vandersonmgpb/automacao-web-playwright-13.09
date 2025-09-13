// @ts-check
const { test, expect } = require('@playwright/test')

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.getByRole('button', { name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  // await page.locator('#name').fill('Fulano de Tall')
  // await page.locator('#email').fill('fulanodetall@email.com')

  // await page.locator('input[placeholder="Informe seu nome"]').fill('Fulano de Tall')
  // await page.locator('input[placeholder="Informe seu email"]').fill('fulanodetall@email.com')

  await page.getByPlaceholder('Informe seu nome').fill('Fulano de Tall')
  await page.getByPlaceholder('Informe seu email').fill('fulanodetall@email.com')

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila').click()

  await page.waitForTimeout(5000)
});
