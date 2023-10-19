describe("Reset password", { testIsolation: false }, () => {
  before(() => {
    cy.signup("Teste", "test@email.com", "123456");
  });

  context("When user leaves form blank", () => {
    it("Should not be able to reset password", () => {
      cy.get(".forget-pwd").find("a").click();

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Email is required");
    });
  });

  context("When user types invalid email", () => {
    it("Should not be able to reset password", () => {
      cy.get("[name='email']").type("test@email");

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Invalid Email");
    });
  });

  context("When user types right email and passwords blank", () => {
    it("Should not be able to reset password", () => {
      cy.get("[name='email']").clear();
      cy.get("[name='email']").type("test@email.com");

      cy.intercept("POST", "**/reset").as("resetPassword");

      cy.get(".submit-btn").find("button").click();
      cy.wait("@resetPassword")
        .its("response.statusCode")
        .should("be.oneOf", [200]);

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Password is required");
      cy.get("span").contains("Confirm password is required");
    });
  });

  context("When user types passwords less than 6 characters", () => {
    it("Should not be able to reset password", () => {
      cy.get("[name='password']").type("s");
      cy.get("[name='confirm_password']").type("s");

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Password must be at least 6 characters");
    });
  });

  context("When password and confirm password doesn't matches", () => {
    it("Should not be able to reset password", () => {
      cy.get("[name='password']").clear();
      cy.get("[name='confirm_password']").clear();

      cy.get("[name='password']").type("123456");
      cy.get("[name='confirm_password']").type("1234567");

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Passwords must match");
    });
  });

  context("When user types right email and right passwords", () => {
    it("Should be able to reset password", () => {
      cy.visit("http://localhost:5173/");

      cy.get(".forget-pwd").find("a").click();

      cy.get("[name='email']").type("test@email.com");

      cy.intercept("POST", "**/reset").as("resetPassword");

      cy.get(".submit-btn").find("button").click();
      cy.wait("@resetPassword")
        .its("response.statusCode")
        .should("be.oneOf", [200]);

      cy.get("[name='password']").type("secret");
      cy.get("[name='confirm_password']").type("secret");

      cy.intercept("POST", "**/reset/*").as("newPassword");

      cy.get(".submit-btn").find("button").click();
      cy.wait("@newPassword")
        .its("response.statusCode")
        .should("be.oneOf", [200]);
    });
  });
});
