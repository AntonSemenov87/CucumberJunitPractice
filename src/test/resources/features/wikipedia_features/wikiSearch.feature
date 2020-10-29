@wiki
Feature: Wikipedia Search verifications verifications


  Scenario: Wikipedia Search Functionality Title Verification
    When user is on Wikipedia homepage
    And user types "Steve Jobs" in search box
    And user clicks wiki search button
    Then user sees "Steve Jobs" is in the wiki title


  Scenario: Wikipedia Search Functionality Header Verification
    When user is on Wikipedia homepage
    And user types "Steve Jobs" in search box
    And user clicks wiki search button
    Then user sees "Steve Jobs" is in the main header


  Scenario: Wikipedia Search Functionality Image Header Verification
    When user is on Wikipedia homepage
    And user types "Steve Jobs" in search box
    And user clicks wiki search button
    Then user sees "Steve Jobs" is in the image header