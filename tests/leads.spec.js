// @ts-check
const { test, expect } = require('@playwright/test')

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  const landingPage = new LandingPage(page)

  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.submitLeadForm('Fulano de Tall', 'fulanodetall@email.com')

  const message = ('Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!')

  await landingPage.toastHaveText(message)

});
