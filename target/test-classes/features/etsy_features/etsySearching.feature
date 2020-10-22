Feature: Etsy search functionality
  Agile story:
  Jira #CBT-25


  Scenario: Etsy search title verification
    Given user is on Etsy home page
    When user searches for wooden spoon
    Then user should see wooden spoon in Etsy title

  @etsy
  Scenario: Etsy search title verification
    Given user is on Etsy home page
    When user searches for "wooden spoon"
    Then user should see "Wooden spoon" in Etsy title

    @etsy2
  Scenario: Etsy search title verification
    Given user is on Etsy home page
    When user searches for "custom wooden spoon"
    Then user should see "Custom wooden spoon" in Etsy title