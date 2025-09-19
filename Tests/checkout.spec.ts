import { expect, test } from "@playwright/test";
import { cartActions } from "../Actions/cartActions";
import { checkoutActions } from "../Actions/checkoutActions";
import { auth } from "../Page Objects/login";

test.describe("Purchase an Item", () => {
  let cartA;
  let checkoutA;
  let authPO;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    cartA = new cartActions(page);
    authPO = new auth(page);
    checkoutA = new checkoutActions(page);
    return test.setTimeout(15000);
  });

  test("Add item to cart and complete checkout process", async () => {
    await authPO.usernameInput.fill(process.env.User);
    await authPO.password.fill(process.env.Pw);
    await authPO.submitButton.click();
    await expect(authPO.submitButton).toBeHidden();
    await cartA.addItemToCart();
    await checkoutA.completeBilling();
  });
});
