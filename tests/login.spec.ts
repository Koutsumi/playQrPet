import { test, expect } from '@playwright/test';

test('Login successfully', async ({ page }) => {
  await page.goto('https://qrpet.vercel.app/');
  await expect(page.getByRole('main')).toContainText('Bem-vindo(a) ao QrPet!');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('exemplo@qrpet.com').click();
  await page.getByPlaceholder('exemplo@qrpet.com').fill('teste@teste.com');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('123123123');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page.getByRole('main')).toContainText('Meus pets');
});