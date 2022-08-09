describe("Log out user", () => {
  it("Should be able to log out user", () => {
    cy.visit("http://localhost:5173/");

    cy.signup("Teste", "tester@email.com", "123456");
    cy.login("tester@email.com", "123456");

    if (cy.get("a").contains("Log out").should("not.be.visible")) {
      cy.get(".sc-ikZpkk").click({ force: true });
      cy.get("a").contains("Log out").click({ force: true });
    } else {
      cy.get("a").contains("Log out").click();
    }
  });
});
