Feature: MyStory

    Background:
        Given User is on the start page

    Scenario: Can change selected Story
        When User clicks the second list item
        Then User is scrolled down to the map and can see the second list item information


