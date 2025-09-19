import { PlaywrightTestConfig } from "@playwright/test";
require("dotenv").config();
require("./playwright.config");
const config: PlaywrightTestConfig = {
  workers: 1,
  projects: [
    {
      name: "Swag Labs",
      use: {
        browserName: "chromium",
        baseURL: process.env.URL,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        headless: true,
        viewport: { width: 1536, height: 850 },
        ignoreHTTPSErrors: true,
      },
    },
  ],
};
export default config;
