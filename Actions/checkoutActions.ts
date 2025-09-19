import { expect } from "@playwright/test";
import { checkout } from "../Page Objects/checkout";

export class checkoutActions extends checkout {
  async completeBilling() {
    await this.checkoutCartIcon.click();
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
    await this.getInput("first-name").fill("my first name");
    await this.getInput("last-name").fill("my last name");
    await this.getInput("postal-code").fill("99999");
    await this.continueButton.click();
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
  }
}
