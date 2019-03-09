/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://localhost:5001/testviews/');
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top');
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Index');
  })

  it('cy.find - Find text on the screen', () => {
    // https://on.cypress.io/title
    cy.get("[data-test-selector='objecttofind']").contains("We found it!");
  })
})
