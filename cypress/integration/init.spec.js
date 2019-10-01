/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Cypress", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("is working", () => {
    expect(true).to.equal(true);
  });
  it("visits the app", () => {
    cy.visit("http://localhost:3000");
  });

  it("Adding a Test Item to localStorage", () => {
    cy.get('button[id="btn"]').click();
    cy.get('input[id="inputDescription"]').type("Test Item");
    cy.get('button[id="btnAdd"]')
      .click()
      .should(() => {
        setTimeout(() => {
          const list = JSON.parse(localStorage.getItem("list"));
          expect(list[0].description).to.eq("Test Item");
        }, 2000);
      });
  });
});
