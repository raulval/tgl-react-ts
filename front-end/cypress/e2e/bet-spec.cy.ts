import { Game } from "../../src/shared/interfaces";

describe("New bet test", () => {
  before(() => {
    const numberOfEmails = {
      counter: Math.floor(Math.random() * (1000000000 - 1) + 1),
    };
    function generateEmail(numberOfEmails: { counter: number }) {
      numberOfEmails.counter++;
      return `test_user${numberOfEmails.counter}@email.com`;
    }
    cy.signup("Teste", generateEmail(numberOfEmails), "123456");
    cy.login("tester@email.com", "123456");
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  context("When user bets less than min_cart_value", () => {
    it("Should not be able to save bets", () => {
      cy.get("a").contains("New Bet").click();

      cy.get("button").contains("Complete game").click();
      cy.get("button").contains("Add to cart").click();

      cy.intercept("POST", "**/bet/new-bet").as("newBet");

      cy.get("button").contains("Save").click();

      cy.wait("@newBet")
        .its("response.statusCode")
        .should("be.oneOf", [401, 400]);
    });
  });

  context("When user try to add less than max_number", () => {
    it("Should not be able to save bets", () => {
      cy.get("button[value=1]").click();
      cy.get("button[value=2]").click();

      cy.get("button").contains("Add to cart").click();

      cy.get(".Toastify__toast--error").should("be.visible");
    });
  });

  context("When user bets the right amount of random games", () => {
    it("Should be able to save bets", () => {
      const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
      const tglUser = JSON.parse(tgl.user);
      const tglGames = JSON.parse(tgl.games);

      localStorage.setItem("userToken", tglUser.userData.token.token);

      const min_cart_value = tglGames.gamesData.min_cart_value;
      const games = tglGames.gamesData.types;
      let totalValue = 0;

      while (totalValue <= min_cart_value) {
        games.forEach((game: Game) => {
          cy.get("button").contains(game.type).click();
          cy.get("button").contains("Complete game").click();
          cy.get("button").contains("Add to cart").click();
          totalValue += game.price;
        });
      }

      cy.intercept("POST", "**/bet/new-bet").as("newBet");

      cy.get("button").contains("Save").click();

      cy.wait("@newBet").its("response.statusCode").should("be.oneOf", [200]);
    });
  });
});
