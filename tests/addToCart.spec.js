import { expect, test } from "@playwright/test"; // Import Playwright test framework
import { BASE_URL } from "../const";
import { AuthPage } from "../Base Credentials/basic_crendential.js";
import { addToCartProduct } from "../Base Credentials/addToCart.js";
import { addtocart } from "../Fixtures/addToCartTestData.js";
import { AuthData } from "../Fixtures/basicCredentialsTestData.js";


test.describe.serial("Adding Product into the Cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    const login = new AuthPage(page);
    await login.LoginDetails(
      AuthData.login.email,AuthData.login.password
    );

  });
  test("Add to Cart Product", async ({ page }) => {
    const add2cart=  new addToCartProduct(page)
    await add2cart.addToCart(addtocart.Product.name)
  })
})