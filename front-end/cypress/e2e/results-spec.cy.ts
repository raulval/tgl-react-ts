describe("Results test", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
    cy.wait(1000);
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("http://localhost:5173/results");
  });

  context("When user filters by lottery game", () => {
    it("Should be able to get lottery results", () => {
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglGames = JSON.parse(tgl.games);
      const games = tglGames.gamesData.types;

      cy.wait(1000);

      cy.get("button").contains(games[0].type).click();

      cy.wait(1000);

      cy.get("p").contains(games[0].type).should("exist");
    });
  });

  context("When user filters by sports league", () => {
    it("Should be able to get sport results by selecting a league", () => {
      cy.wait(1000);
      cy.get("button").contains("Brasileirão - Série A").click();

      cy.get("div[data-testid='match-teams']").should("exist");
    });
  });
});
