import { test, expect } from '@playwright/test';
import { DesktopsPage } from '../pages/DesktopsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckOut';

test('Place order with multiple products and validate price calculation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const desktopsPage = new DesktopsPage(page);
  const productPage = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 🔹 Open site & desktops ONLY ONCE
await loginPage.navigateToLoginScreen();
  await loginPage.login();
  await desktopsPage.openProductsPage();

  // 1️⃣ Add first product
  await desktopsPage.addProductByIndex(0);
  await productPage.addToCart();

  // 2️⃣ Go back to desktops via menu (NO reload)
  await desktopsPage.openProductsPage();
  await desktopsPage.addProductByIndex(1);
  await productPage.selectOption('320 GB');
  await productPage.addToCart();

  // 3️⃣ Open cart and validate prices
  await cartPage.open();

  const expectedTotal =  await cartPage.calculateExpectedTotal();
  const actualTotal = await cartPage.getOrderTotal();
  console.log(`Expected Total: ${expectedTotal}`);
  console.log(`Actual Total: ${actualTotal}`);

  expect(expectedTotal).toBe(actualTotal);


  await cartPage.termsAndConditions();
  await cartPage.checkout();

 



  await checkoutPage.completeCheckout();


});
