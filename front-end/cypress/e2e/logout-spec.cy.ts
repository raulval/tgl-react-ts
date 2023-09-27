describe("Log out user", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
  });

  it("Should be able to log out user", () => {
    cy.get("a:contains('Log out')").should("be.visible").click({ force: true });
    cy.location("pathname").should("eq", "/");
  });
});
