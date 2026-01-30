import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLoginScreen() {
   await this.page.goto(process.env.BASE_URL!);
    await this.page.locator('//a[@href="/login"]').click();
  }

  async login() {
    // Fill email
    await this.page.fill('#Email', 'test_pw@gmail.com');

    // Fill password
    await this.page.fill('#Password', 'test123');

    // Click Login button
    await this.page.click('input[value="Log in"]');

    // Optional validation: user is logged in
  }
}
