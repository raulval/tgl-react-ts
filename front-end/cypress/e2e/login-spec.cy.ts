describe("Log in user", () => {
  context("When user types right email and password", () => {
    it("Should be able to log in user", () => {
      cy.visit("http://localhost:5173/");

      cy.signup("Teste", "test@email.com", "123456");

      cy.get("[name='email']").type("test@email.com");
      cy.get("[name='password']").type("123456");

      cy.intercept("POST", "**/login").as("logIn");

      cy.get(".submit-btn").find("button").click();

      cy.wait("@logIn").its("response.statusCode").should("be.oneOf", [200]);

      cy.logout();
    });
  });

  context("When user types wrong email and password", () => {
    it("Should not be able to log in user and shows validations", () => {
      cy.get("[name='email']").type("testtt@email.com");
      cy.get("[name='password']").type("1");

      cy.intercept("POST", "**/login").as("logIn");

      cy.get(".submit-btn").find("button").click();

      cy.wait("@logIn").its("response.statusCode").should("be.oneOf", [401]);
    });
  });

  context("When user leaves form blank", () => {
    it("Should not be able to log in user and shows validations", () => {
      cy.get("[name='email']").clear();
      cy.get("[name='password']").clear();

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Email is required");
      cy.get("span").contains("Password is required");
    });
  });

  context("When user types invalid email", () => {
    it("Should not be able to log in user and shows validations", () => {
      cy.get("[name='email']").type("email@email");
      cy.get("[name='password']").type("123456");

      cy.get(".submit-btn").find("button").click();

      cy.get("span").contains("Invalid Email");
    });
  });
});
