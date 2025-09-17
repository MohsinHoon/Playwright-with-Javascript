import { expect, test } from "@playwright/test"; // Import Playwright test framework
import { AuthData } from "../Fixtures/basicCredentialsTestData";
import { BASE_URL } from "../const";
import { AuthPage } from "../Base Credentials/basic_crendential.js";

test.describe.serial("Basic Site Sign Up and Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });
  test("Site Sign Up Test", async ({ page }) => {
    const signup = new AuthPage(page);
    await signup.SignUpDetails(
      AuthData.signUpDetails.gender,
      AuthData.signUpDetails.firstName,
      AuthData.signUpDetails.lastName,
      AuthData.signUpDetails.email,
      AuthData.signUpDetails.password,
      AuthData.signUpDetails.confirmPassword
    );
  });
  test("Site Login Test", async ({ page }) => {
      const login = new AuthPage(page);
      await login.LoginDetails(
        AuthData.login.email,
        AuthData.login.password
      );
    })
});
