import { Locator, Page } from "@playwright/test";

export class cart {
  readonly page: Page;
  readonly addToCart: Locator;
  readonly badge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCart = this.page
      .locator("//button[contains(text(),'Add to cart')]")
      .nth(0);
    this.badge = this.page.locator(
      '//span[contains(@class,"shopping_cart_badge")]'
    );
  }
}
