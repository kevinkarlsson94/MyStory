Feature: MyStory
    # Test cases for MyStory Feature

    Background:
        Given User is on the start page

    Scenario: Can filter the items by date in the direction ascending
        Given User is on the start page
        When User clicks on the order by button 'date'
        Then The list items should be ordered in 'asc' by date

    Scenario: Can filter the items by date in the direction descending
        Given User is on the start page
        When User clicks on the order by button 'date'
        And User clicks on the order by button 'date'
        Then The list items should be ordered in 'desc' by date

    Scenario: Can filter the items by name in the direction ascending
        Given User is on the start page
        When User clicks on the order by button 'name'
        Then The list items should be ordered in 'asc' by name

    Scenario: Can filter the items by name in the direction descending
        Given User is on the start page
        When User clicks on the order by button 'name'
        And User clicks on the order by button 'name'
        Then The list items should be ordered in 'desc' by name

    Scenario: Can change selected Story by pressing it in the list
        When User clicks list item 2
        Then User is scrolled down to the map and can see popup with item id of 2

    Scenario: Can change selected Story by next button
        When User clicks on the 'next' button
        Then User is scrolled down to the map and can see popup with item id of 2

    Scenario: Can change selected Story by previous button
        When User clicks on the 'prev' button
        Then User is scrolled down to the map and can see popup with item id of 8

    Scenario: Can see all meta information about the default selected Story on the map
        Then User sees full Story meta information for item 1 in the list


