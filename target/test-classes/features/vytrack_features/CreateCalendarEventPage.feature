@CCEP
Feature: Activities Module: Create Calendar Events Page

  @defaultFieldsCCEP
  Scenario: Veryfy Default Fields for Calendar Events Page

    Given user is signed in as a sales manager
    When user is on All Calendar Events page under the Activities tab
    And user is taken to the Create Calendar Events page after clicking the Create Calendar Event
    And user should see their name as the default value if the owner field
    And user should see the title field to be empty by default
    And user should see start date field with default value of the current date
    And user should see start time field with default value of the current time