/// <reference types="cypress" />

const getByTestSelector = (testSelector: string, chainSelector?: string) => {
  const chainedSelectorTemplate = chainSelector ? ` ${chainSelector}` : ""
  return cy.get(`[data-testid="${testSelector}"]${chainedSelectorTemplate}`)
}

Cypress.Commands.add("getByTestSelector", getByTestSelector)
