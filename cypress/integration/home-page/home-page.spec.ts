/// <reference types="cypress" />

context("HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should fill the contact me form", () => {
    cy.get("div > form > input:nth-child(1)").type("Cypress agent");

    cy.get("div > form > input:nth-child(2)").type("cypress@gmail.com");

    cy.get("div > form > textarea").type("A test message from cypress agent");

    cy.get("div > form > button").click();

    cy.url().should("eq", "https://getform.io/thank-you");
  });

  it("should toggle to dark mode", () => {
    cy.wait(1000);

    // initially dark mode
    cy.get("main > div > section").should(
      "have.css",
      "background-color",
      "rgb(40, 49, 65)"
    );

    // then toggle to light mode
    cy.get("[aria-label='moon icon']").click();

    cy.get("main > div > section").should(
      "have.css",
      "background-color",
      "rgb(247, 250, 252)"
    );
  });

  it("should route to github profile in new tab", () => {
    cy.get("footer > div > div > a:nth-child(4)").click();

    cy.url().should("not.eq", "https://github.com/ali4heydari");
  });

  it("should assert download resume button have href", () => {
    cy.get("main > div > section > div > div > div > a")
      .should("have.attr", "href")
      .and("include", ".pdf");
  });
});
