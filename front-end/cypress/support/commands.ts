/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.logout()
     * @example cy.login(email, password)
     * @example cy.signup(name, email, password)
     * @example cy.addBets()
     */
    logout(): Chainable<void>;
    login(email: string, password: string): Chainable<void>;
    signup(name: string, email: string, password: string): Chainable<void>;
    addBets(): Chainable<void>;
  }
}

Cypress.Commands.add("logout", () => {
  cy.get("a:contains('Log out')").should("be.visible").click({ force: true });
  cy.location("pathname").should("eq", "/");
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("[name='email']").type(email);
  cy.get("[name='password']").type(password);

  cy.intercept("POST", "**/login").as("logIn");

  cy.get(".submit-btn").find("button").click();

  cy.wait("@logIn").its("response.statusCode").should("be.oneOf", [200]);
  cy.wait(1000);
  cy.saveLocalStorage();
});

Cypress.Commands.add("signup", (name, email, password) => {
  cy.visit("http://localhost:5173/signup");

  cy.get("[name='name']").type(name);
  cy.get("[name='email']").type(email);
  cy.get("[name='password']").type(password);

  cy.intercept("POST", "**/user/create").as("signUp");

  cy.get(".submit-btn").find("button").click();

  cy.wait("@signUp").its("response.statusCode").should("be.oneOf", [200]);
});

Cypress.Commands.add("addBets", () => {
  const tgl = JSON.parse(localStorage.getItem("persist:TGL"));
  console.log(tgl);

  const tglUser = JSON.parse(tgl.user);
  const tglGames = JSON.parse(tgl.games);
  console.log(tglGames);

  localStorage.setItem("userToken", tglUser.userData.token.token);

  const min_cart_value = tglGames.gamesData.min_cart_value;
  const games = tglGames.gamesData.types;
  let totalValue = 0;
  console.log(tglGames.gamesData.types);

  cy.get("a").contains("New Bet").click();

  while (totalValue <= min_cart_value) {
    games.forEach((game: any) => {
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

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
