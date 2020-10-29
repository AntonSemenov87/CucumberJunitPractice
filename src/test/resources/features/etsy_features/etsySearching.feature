Feature: Etsy search functionality
  Agile story:
  Jira #CBT-25

  Background: user is on Etsy home page
    Given user is on Etsy home page


  Scenario: Etsy search title verification
    When user searches for wooden spoon
    Then user should see wooden spoon in Etsy title

  @etsy
  Scenario: Etsy search title verification
    When user searches for "wooden spoon"
    Then user should see "Wooden spoon" in Etsy title

  @etsy2
  Scenario Outline: Etsy search title verification
    When user searches for "<searchValue>"
    Then user should see "<expectedTitle>" in Etsy title

    Examples: Different data sets
      | searchValue         | expectedTitle       |
      | custom wooden spoon | Custom wooden spoon |
      | wooden spoon        | Wooden spoon        |
      | balalaika           | Balalaika           |
