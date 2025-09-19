import { expect } from "@playwright/test";
import { cart } from "../Page Objects/cart";

export class cartActions extends cart {
  async addItemToCart() {
    await this.addToCart.click();
    await expect(this.badge).toBeVisible();
  }
}
