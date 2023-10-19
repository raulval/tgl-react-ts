describe("Sign up user", () => {
  before(() => {
    cy.visit("http://localhost:5173/");
  });

  context("When user leaves form blank", () => {
    it("Should not be able to sign up an user and shows errors", () => {
      cy.get(".signup-btn").find("a").click();

      cy.get("[name='name']").clear();
      cy.get("[name='email']").clear();
      cy.get("[name='password']").clear();

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Name is required");
      cy.get("span").contains("Email is required");
      cy.get("span").contains("Password is required");
    });
  });

  context(
    "When user types name less than 3 words, invalid email and password less than 6 characters",
    () => {
      it("Should not be able to sign up an user and shows errors", () => {
        cy.visit("http://localhost:5173/signup");

        cy.get("[name='name']").clear();
        cy.get("[name='email']").clear();
        cy.get("[name='password']").clear();

        cy.get("[name='name']").type("T");
        cy.get("[name='email']").type("test@email");
        cy.get("[name='password']").type("123");

        cy.get(".submit-btn").find("button").click();

        cy.get("span").contains("Name is too short");
        cy.get("span").contains("Invalid Email");
        cy.get("span").contains("Password must be at least 6 characters");
      });
    }
  );

  context("When user types right name, email and password", () => {
    it("Should be able to sign up an user", () => {
      cy.visit("http://localhost:5173/signup");

      cy.get("[name='name']").clear();
      cy.get("[name='email']").clear();
      cy.get("[name='password']").clear();

      cy.get("[name='name']").type("Test User");
      cy.get("[name='email']").type("tester@email.com");
      cy.get("[name='password']").type("123456");

      cy.intercept("POST", "**/user/create").as("signUp");

      cy.get(".submit-btn").find("button").click();

      cy.wait("@signUp").its("response.statusCode").should("be.oneOf", [200]);
    });
  });
});
