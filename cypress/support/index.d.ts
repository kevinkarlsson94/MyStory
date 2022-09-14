declare namespace Cypress {
  interface Chainable {
    getByTestSelector: typeof getByTestSelector
  }
}
