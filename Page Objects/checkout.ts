import { Locator, Page } from "@playwright/test";

export class checkout {
  readonly page: Page;
  readonly checkoutCartIcon: Locator;
  readonly continueButton: Locator;
  readonly checkoutButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutCartIcon = this.page
      .locator("//a[contains(@class,'shopping_cart_link')]")
      .nth(0);
    this.continueButton = this.page.locator("#continue");

    this.checkoutButton = this.page.locator("#checkout");
    this.finishButton = this.page.locator("#finish");
  }

  getInput(inputName: string): Locator {
    return this.page.locator(`//input[contains(@id,"${inputName}")]`);
  }
}
