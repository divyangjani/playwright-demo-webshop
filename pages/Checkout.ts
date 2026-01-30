import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}


  async selectBillingAddress() {


    await this.page.locator('//select[@id="billing-address-select"]').selectOption('New Address');

    await this.page.getByLabel('First name:').fill('Divyang');


    await this.page.getByLabel('Last name:').fill('Jani');
      

    await this.page.getByLabel('Country:').selectOption('India'); 
     

    await this.page.getByLabel('Email:').fill('test_pw@gmail.com');
    await this.page.getByLabel('City:').fill('SURAT');
    await this.page.getByLabel('Address 1:').fill('123 Test Street');
    await this.page.getByLabel('Zip / postal code:').fill('12345');
    await this.page.getByLabel('Phone number:').fill('1234567890');
     await this.page.locator('//div[@id="billing-buttons-container"]/input').click();

  }


  async selectShippingAddress() {
    
    await this.page.click('//div[@id="shipping-buttons-container"]/input');
  }


  


  async selectShippingMethod() {
    // Continue (default shipping)
    await this.page.locator('//input[@type="radio" and @value="Next Day Air___Shipping.FixedRate"]').check();
    await this.page.click('//div[@id="shipping-method-buttons-container"]/input');
  }

  async selectPaymentMethod() {
    // Select Cash On Delivery (simplest)
    await this.page.locator('//input[@type="radio" and @value="Payments.CashOnDelivery"]').check();
    await this.page.click('//div[@id="payment-method-buttons-container"]/input');
  }

  async confirmPaymentInformation() {
    // Continue payment info
    await this.page.click('//div[@id="payment-info-buttons-container"]/input');
  }

  async confirmOrder() {
    await this.page.click('//div[@id="confirm-order-buttons-container"]/input');

    // Validate order success
    await expect(
      this.page.locator('//div[@class="section order-completed"]/div[@class="title"]/strong')
    ).toHaveText('Your order has been successfully processed!');
  }

  async completeCheckout() {
    await this.selectBillingAddress();
    await this.selectShippingAddress();
    await this.selectShippingMethod();
    await this.selectPaymentMethod();
    await this.confirmPaymentInformation();
    await this.confirmOrder();
  }
}
