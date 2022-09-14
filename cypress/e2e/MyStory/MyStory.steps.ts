import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("User is on the start page", () => {
  cy.visit("http://localhost:3000/")
})

Then("User clicks the second list item", () => {
  cy.getByTestSelector("stories-list")
})

Then("User is scrolled down to the map and can see the second list item information", () => {})
