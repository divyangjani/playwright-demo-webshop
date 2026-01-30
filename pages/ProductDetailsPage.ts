import { Page, expect } from '@playwright/test';

export class ProductDetailsPage {
  constructor(private page: Page) {}

  async selectOption(option: string) {
    await this.page.getByRole('radio', { name: option }).check();
  }

  async addToCart()
   {
    await this.page.locator('//div[@class="add-to-cart"]/child::div/input[@type="button"]').click();

    
    const notification = this.page.locator('.bar-notification.success');
    await expect(notification).toBeVisible();
    await notification.waitFor({ state: 'hidden' });
    
  }
}
