# Playwright CI/CD Demo

![CI](https://github.com/AmirSean/Playwright-Demo/actions/workflows/e2e.yml/badge.svg)

This project demonstrates how to set up end-to-end (E2E) test automation with Playwright (TypeScript) and run it on GitHub Actions.  
The demo uses Swag Labs (https://www.saucedemo.com/) as the target app to showcase login, add-to-cart, and checkout flows.

---

## Example Reports

The latest test report can be downloaded from the GitHub Actions run:

1. Go to the Actions tab.
2. Open the most recent workflow run.
3. Download the artifact named `playwright-report`.
4. Unzip it and open `index.html` in a browser.

## Features

- One complete E2E flow: login -> add to cart -> checkout
- Playwright + TypeScript test automation
- Retries, trace, screenshot, and video capture on failure
- CI pipeline with GitHub Actions
- HTML test report uploaded as artifact

---

## Getting Started

Install dependencies

```bash
npm ci
```

Run locally

```bash
npx playwright test
```

View report

```bash
npx playwright show-report
```
