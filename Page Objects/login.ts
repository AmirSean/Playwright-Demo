import { Locator, Page } from "@playwright/test";

export class auth {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly password: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator("#user-name");
    this.password = this.page.locator("#password");
    this.submitButton = this.page.locator("#login-button");
  }
}
