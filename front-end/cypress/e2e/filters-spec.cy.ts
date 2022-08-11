import { Game } from "shared/interfaces";

describe("Filters test", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
    cy.wait(1000);
    cy.addBets();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  context("When user filters by clicking in one game", () => {
    it("Should be able to filter bets by game type", () => {
      cy.visit("http://localhost:5173/home");
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglGames = JSON.parse(tgl.games);
      const games = tglGames.gamesData.types;

      cy.wait(1000);

      cy.get("button").contains(games[0].type).click();

      cy.wait(1000);

      cy.get("p").contains(games[1].type).should("not.exist");
      cy.get(`div[color='${games[1].color}']`).should("not.exist");
    });
  });

  context("When user filters by clicking in two games", () => {
    it("Should be able to filter bets by game type", () => {
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglGames = JSON.parse(tgl.games);

      const games = tglGames.gamesData.types;

      cy.wait(1000);
      cy.get("button").contains(games[1].type).click();
      cy.wait(1000);

      cy.get("p").contains(games[2].type).should("not.exist");
      cy.get(`div[color='${games[2].color}']`).should("not.exist");
    });
  });

  context("When user clear filters back", () => {
    it("Should be able to see all bets", () => {
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglGames = JSON.parse(tgl.games);

      const games = tglGames.gamesData.types;

      cy.wait(1000);
      cy.get("button").contains(games[0].type).click();
      cy.get("button").contains(games[1].type).click();
      cy.wait(1000);

      games.forEach((game: Game) => {
        cy.get("p").contains(game.type).should("exist");
        cy.get(`div[color='${game.color}']`).should("exist");
      });
    });
  });
});
