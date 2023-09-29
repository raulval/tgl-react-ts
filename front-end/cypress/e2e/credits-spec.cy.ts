describe("New sport bet test", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  context("When user create account and earn credits", () => {
    it("Should be able to have 30 credits by default", () => {
      cy.get("[data-test-id='credits']").should("have.text", "30.00");
    });
  });

  context("When user spends credits with a bet", () => {
    it("Should be able to spend credits", () => {
      cy.visit("http://localhost:5173/home");
      cy.addBets();
      cy.get("[data-test-id='credits']").should("have.text", "10.00");
    });
  });
});
