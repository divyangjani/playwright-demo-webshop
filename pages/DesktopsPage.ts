import { Page } from '@playwright/test';

export class DesktopsPage {
  constructor(private page: Page) {}



  

  // ✅ Call ONLY ONCE at the beginning
  async openProductsPage() {
    await this.page.locator('//div[@class="header-menu"]/descendant::li[2]/a').hover();
    await this.page.locator('//div[@class="header-menu"]/descendant::li[2]/a/parent::li/child::ul/li/a[@href="/desktops"]').click()

    
  }

  // ✅ Use this after first product (NO page reload)
  

  async addProductByIndex(index: number) {
    await this.page
      .getByRole('button', { name: 'Add to cart' })
      .nth(index)
      .click();
  }
}
