import { test, expect } from '@playwright/test';

test.describe('E2E Navegación y Temas', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('debe cargar la página de inicio correctamente (Japón)', async ({ page }) => {
    // Comprobar que el título es correcto
    await expect(page).toHaveTitle(/Japón - Luna de Miel/);
    
    // Comprobar que el logo está
    const logoText = page.locator('.jp-text');
    await expect(logoText).toHaveText('日本');

    // Comprobar que se ha cargado el subtítulo del destino Japón
    const heroTitle = page.locator('.hero-text h1');
    await expect(heroTitle).toHaveText('Japón');
    
    const heroSubtitle = page.locator('.hero-text p');
    await expect(heroSubtitle).toHaveText('La tierra del sol naciente - Guía General');
  });

  test('el botón de tema debe cambiar entre oscuro y claro', async ({ page }) => {
    const themeBtn = page.locator('.theme-btn');
    const body = page.locator('body');

    // Por defecto es oscuro
    await expect(body).not.toHaveClass(/light-theme/);

    // Clic para cambiar a claro
    await themeBtn.click();
    await expect(body).toHaveClass(/light-theme/);

    // Clic para volver a oscuro
    await themeBtn.click();
    await expect(body).not.toHaveClass(/light-theme/);
  });

  test('navegar por el menú debe actualizar el contenido', async ({ page }) => {
    // Buscar el botón de Tokio en el menú horizontal (Nivel 1)
    const tokioBtn = page.locator('#level1-menu li', { hasText: 'Tokio' });
    await tokioBtn.click();

    // Comprobar que el hero se ha actualizado a Tokio
    const heroTitle = page.locator('.hero-text h1');
    await expect(heroTitle).toHaveText('Tokio');

    // Comprobar que el menú lateral (Nivel 2) se ha actualizado
    const sidebar = page.locator('#level2-menu');
    await expect(sidebar).toContainText('Información General e Historia');
    
    // Hacer clic en una sección del menú lateral y comprobar que hace scroll o se activa
    const sectionBtn = page.locator('#level2-menu li').first();
    await sectionBtn.click();
    await expect(sectionBtn).toHaveClass(/active/);
  });
});
