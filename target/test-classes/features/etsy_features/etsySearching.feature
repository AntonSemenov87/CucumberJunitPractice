Feature: Etsy search functionality
  Agile story:
  Jira #CBT-25

  @etsy
  Scenario: Etsy search title verification
    Given user is on Etsy home page
    When user searches for wooden spoon
    Then user should see wooden spoon in Etsy title