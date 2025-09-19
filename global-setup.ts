// global-setup.ts

//if this site used a real auth page skipping authentication for tests would occur here,
//this block is removed due to being a demo.
/*
import { chromium, expect, FullConfig } from "@playwright/test";
import { auth } from "./Page Objects/login";

async function globalSetup(config: FullConfig) {
  
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const authPO = new auth(page);
  await page.goto(baseURL!);
  require("dotenv").config();
  await authPO.usernameInput.fill(process.env.User);
  await authPO.password.fill(process.env.Pw);
  await authPO.submitButton.click();
  await expect(authPO.submitButton).toBeHidden();
  await browser.close();
  
}
export default globalSetup;
*/
