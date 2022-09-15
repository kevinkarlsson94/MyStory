import { Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { storiesCypress } from "../../../src/Features/MyStory/Models/MyStory.mock.data"
import { Story } from "../../../src/Features/MyStory/Models/MyStory.types"

Before({ tags: "@gotoStart" }, () => {
  cy.visit("http://localhost:3000/")
})

Given("User is on the start page", () => {
  cy.visit("http://localhost:3000/")
})

Then("User clicks list item {int}", (id: number) => {
  const nthListItem = cy.getByTestSelector(`stories-list-item-${id}`)
  nthListItem.click()
})

Then("User is scrolled down to the map and can see popup with item id of {int}", (id: number) => {
  cy.wait(1500)
  cy.getByTestSelector(`stories-list-popup-${id}`)
})

When("User clicks on the {string} button", (buttonType: string) => {
  if (buttonType === "next") {
    cy.getByTestSelector("next-button").click({ force: true })
  }
  if (buttonType === "prev") {
    cy.getByTestSelector("prev-button").click()
  }
})

Then("User is scrolled down to the map and can see the last list item information", () => {
  cy.getByTestSelector("popup").contains("Vretstorp")
})

Then("User sees full Story meta information for item {int} in the list", (id: number) => {
  cy.scrollTo("bottom")
  const currentStory = storiesCypress.filter((story: Story) => story.id === id)[0]
  cy.getByTestSelector(`stories-list-popup-${id}`).contains(currentStory.locationName)
  cy.getByTestSelector(`stories-list-popup-${id}`).contains(currentStory.description)

  // elements under needs partial match since it's on same line
  cy.getByTestSelector(`stories-list-popup-${id}`).should("include.text", currentStory.date)
  cy.getByTestSelector(`stories-list-popup-${id}`).should("include.text", currentStory.country)
})

// testSelector="order-by-name-button"
// testSelector="order-by-date-button"

When("User clicks on the order by button {string}", (button: string) => {
  if (button === "name") {
    cy.getByTestSelector("order-by-name-button").click()
  }
  if (button === "date") {
    cy.getByTestSelector("order-by-date-button").click()
  }
})

Then("The list items should be ordered in {string} by name", (order: string) => {
  // get the stories data and sort them in ascending or descending order depending on the input parameter
  const orderedListTitles = storiesCypress
    .sort((a, b) =>
      order === "asc" ? (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1) : a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
    )
    .map((story) => story.title)

  // get the sorted list elements in the DOM and map over the titles and compare to the sorted list
  cy.get('[data-testid^="stories-list-item"]')
    .then(($items) => $items.map((_, html) => html.firstChild?.textContent).toArray())
    .should("deep.eq", orderedListTitles)
})

Then("The list items should be ordered in {string} by date", (order: string) => {
  // get the stories data and sort them in ascending or descending order depending on the input parameter
  const orderedListTitles = storiesCypress
    .sort((a, b) =>
      order === "asc" ? new Date(b.date).getDate() - new Date(a.date).getDate() : new Date(a.date).getDate() - new Date(b.date).getDate()
    )
    .map((story) => story.title)

  // get the sorted list elements in the DOM and map over the titles and compare to the sorted list
  cy.get('[data-testid^="stories-list-item"]')
    .then(($items) => $items.map((_, html) => html.firstChild?.textContent).toArray())
    .should("deep.eq", orderedListTitles)
})
