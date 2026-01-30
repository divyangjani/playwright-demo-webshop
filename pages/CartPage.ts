import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async open() {

   await this.page.locator('//div[@class="header-links-wrapper"]/div/ul/li/a[@href="/cart"]').click();
  }

  async calculateExpectedTotal(): Promise<number> {
    const subtotals = await this.page
      .locator(
        '//table/tbody/tr[@class="cart-item-row"]/td[6]/span[@class="product-subtotal"]'
      )
      .allTextContents();

    let sum = 0;

    for (const value of subtotals) {
      sum += Number(value.trim());
    }

    return sum;
  }

  async getOrderTotal(): Promise<number> {
    const text = await this.page
      .locator('//span[@class="product-price order-total"]')
      .textContent();

    return Number(text?.trim());
  }

async termsAndConditions() {
  await this.page.locator('//div[@class="terms-of-service"]/input[@type="checkbox"]').check();
  // 
  }

  async checkout() {

    await this.page.locator('//button[@type="submit"]').click();
  }


}
