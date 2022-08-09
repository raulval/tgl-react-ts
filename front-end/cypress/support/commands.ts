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
     */
    logout(): Chainable<string>;
    login(email: string, password: string): Chainable<string>;
    signup(name: string, email: string, password: string): Chainable<string>;
  }
}

Cypress.Commands.add("logout", () => {
  if (cy.get("a").contains("Log out").should("not.be.visible")) {
    cy.get(".sc-ikZpkk").click({ force: true });
    cy.get("a").contains("Log out").click({ force: true });
  } else {
    cy.get("a").contains("Log out").click();
  }
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("[name='email']").type(email);
  cy.get("[name='password']").type(password);

  cy.intercept("POST", "**/login").as("logIn");

  cy.get(".submit-btn").find("button").click();

  cy.wait("@logIn").its("response.statusCode").should("be.oneOf", [200]);
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
