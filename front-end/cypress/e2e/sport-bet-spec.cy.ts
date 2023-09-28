describe("New sport bet test", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("http://localhost:5173/sports");
    cy.wait(2000);
  });

  context("When user bet in scheduled match with insufficient credits", () => {
    it("Should not be able to bet with insufficient credits", () => {
      cy.get("[data-test-id='odd-button']").first().click();
      cy.get("input[type=number]").click();
      cy.get("input[type=number]").clear();
      cy.get("input[type=number]").type("200");
      cy.get("button").contains("Save Bet").click();

      cy.intercept("POST", "**/sports/new-bet").as("newSportBet");

      cy.get("button").contains("Bet!").click();

      cy.wait("@newSportBet")
        .its("response.statusCode")
        .should("be.oneOf", [400]);
      cy.get(".Toastify__toast--error").should("be.visible");
    });
  });

  context("When user bet in scheduled match", () => {
    it("Should be able to bet", () => {
      cy.get("[data-test-id='odd-button']").first().click();
      cy.get("input[type=number]").click();
      cy.get("input[type=number]").clear();
      cy.get("input[type=number]").type("1");
      cy.get("button").contains("Save Bet").click();

      cy.intercept("POST", "**/sports/new-bet").as("newSportBet");

      cy.get("button").contains("Bet!").click();

      cy.wait("@newSportBet")
        .its("response.statusCode")
        .should("be.oneOf", [201]);
    });
  });

  context("When user try to bet in a match that has already betted", () => {
    it("Should not be able to bet", () => {
      cy.get("[data-test-id='odd-button']").first().click();
      cy.get("input[type=number]").click();
      cy.get("input[type=number]").clear();
      cy.get("input[type=number]").type("1");
      cy.get("button").contains("Save Bet").click();

      cy.intercept("POST", "**/sports/new-bet").as("newSportBet");

      cy.get("button").contains("Bet!").click();

      cy.wait("@newSportBet")
        .its("response.statusCode")
        .should("be.oneOf", [400]);
      cy.get(".Toastify__toast--error").should("be.visible");
    });
  });
});
