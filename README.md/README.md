# Playwright Automation – Demo Web Shop

## Project Description
This project contains UI automation tests built using Playwright with TypeScript.
The automation validates a complete shopping flow on Demo Web Shop.

Website:
https://demowebshop.tricentis.com

---

## Test Scenario
Place order with multiple products and validate cart price calculation.

Steps automated:
1. Login with valid user
2. Navigate to Desktops category
3. Add multiple products to cart
4. Calculate sum of all product prices
5. Validate cart total
6. Checkout and confirm order

---

## Technologies Used
- Playwright
- TypeScript
- Node.js
- Page Object Model

---

## Environment Setup

Create a `.env` file in the project root and add:

BASE_URL=https://demowebshop.tricentis.com

USER_EMAIL=test_pw@gmail.com

USER_PASSWORD=test123



---


### Install dependencies


npm install


### Install Playwright browsers


npx playwright install


### Run tests


npx playwright test


### Run tests in browser


npx playwright test --headed


---

## Test Report
After test execution run:


npx playwright show-report


---

## AI Usage (Bonus)
AI tools were used to:
- Design Page Object Model
- Identify locators
- Debug timeouts
- Improve automation efficiency

A demo video/document : https://app.screencastify.com/watch/dOKkHAwegFhAiPg6Suwm?checkOrg=1ff33ef0-d1ff-4bff-82f1-1a1c72766338