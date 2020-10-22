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


  Scenario: Etsy search title verification
    When user searches for "custom wooden spoon"
    Then user should see "Custom wooden spoon" in Etsy title

