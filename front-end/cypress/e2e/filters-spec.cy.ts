import { Game } from "shared/interfaces";

describe("Filters test", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
    cy.wait(1000);
    cy.addBets();
    cy.addSportBets();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("http://localhost:5173/home");
  });

  context("When user filters by lottery game", () => {
    it("Should be able to filter lottery bets by game type", () => {
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglGames = JSON.parse(tgl.games);
      const games = tglGames.gamesData.types;

      cy.wait(1000);

      cy.get("button").contains(games[0].type).click();

      cy.wait(1000);

      cy.get("p").contains(games[0].type).should("exist");
      cy.get(`div[color='${games[0].color}']`).should("exist");
    });

    it("Should be able to filter lottery bets by clicking in two games", () => {
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglGames = JSON.parse(tgl.games);

      const games = tglGames.gamesData.types;

      cy.get("button").contains(games[0].type).click();
      cy.wait(1000);
      cy.get("button").contains(games[1].type).click();
      cy.wait(1000);

      cy.get("p").contains(games[0].type).should("exist");
      cy.get(`div[color='${games[0].color}']`).should("exist");
      cy.get("p").contains(games[1].type).should("exist");
      cy.get(`div[color='${games[1].color}']`).should("exist");
    });
  });

  context("When user filters by sports league", () => {
    it("Should be able to filter sport bets by selecting one league", () => {
      cy.wait(1000);
      cy.get("button").contains("Brasileirão - Série A").click();

      cy.get("p").contains("Possible Earnings").should("exist");
    });

    it("Should be able to filter sport bets by selecting two leagues", () => {
      cy.wait(1000);
      cy.get("button").contains("Brasileirão - Série A").click();
      cy.get("button").contains("UEFA Champions League").click();
      cy.wait(1000);

      cy.get("p:contains('Possible Earnings')").should("have.length.gte", 2);
    });
  });
});
