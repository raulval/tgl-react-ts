import { Game } from "shared/interfaces";

describe("New bet test", () => {
  before(() => {
    const numberOfEmails = Math.floor(Math.random() * (1000000000 - 1) + 1);

    cy.signup("Teste", `test_user${numberOfEmails}@email.com`, "123456");
    cy.login(`test_user${numberOfEmails}@email.com`, "123456");
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("http://localhost:5173/lottery");
  });

  context("When user bets less than min_cart_value", () => {
    it("Should not be able to save bets", () => {
      cy.wait(5000);
      cy.get("a").contains("Lottery bet").click();

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
