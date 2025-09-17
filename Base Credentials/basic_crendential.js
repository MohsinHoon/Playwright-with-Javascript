import { expect } from "@playwright/test"; // Importing the expect assertion from Playwright

export class AuthPage {
  constructor(page) {
    this.page = page;
  }

  // Sign Up Details
  async SignUpDetails(
    gender,
    firstname,
    lastname,
    email,
    password,
    confirmpassword
  ) {
    await this.page.getByRole("link", { name: "Register" }).click();
    await this.page.getByRole("radio", { name: gender, exact: true }).check();
    await this.page
      .getByRole("textbox", { name: "First name" })
      .fill(firstname);
    await this.page.getByRole("textbox", { name: "Last Name:" }).fill(lastname);

    await this.page.getByRole("textbox", { name: "Email:" }).fill(email);

    await this.page
      .getByRole("textbox", { name: "Password:", exact: true })
      .fill(password);
    await this.page
      .getByRole("textbox", { name: "Confirm Password:" })
      .fill(confirmpassword);
    await this.page.getByRole("button", { name: "Register" }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async LoginDetails(email, password) {
    await this.page.getByRole("link", { name: "Log in" }).click();

    await this.page.getByRole("textbox", { name: "Email:" }).fill(email);

    const emailError = this.page.getByText("Please enter a valid email");
    let isInvalid = false;
    try {
      await emailError.waitFor({ state: "visible", timeout: 2000 });
      isInvalid = true;
    } catch {
      isInvalid = false;
    }
    if (isInvalid) {
      console.error("Please input valid email");
      throw new Error("Invalid email format");
    } else {
      console.log("Email format is valid");
    }
    await this.page.getByRole("textbox", { name: "Password:" }).fill(password);
    await this.page.getByRole("button", { name: "Log in" }).click();
  }
}
