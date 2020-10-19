@smokeTest @regressionTest
Feature: Google feature verifications
  Agile Story: User stories, acceptance criteria
  We can pass here any additional info related top this feature file
  # comments here with hashtag


  Scenario: Google title verification
    When user is on google homepage
    Then user should see title containing Google

    Scenario: Google title verification after searching a term
      When user is on google homepage
      And user types wooden spoon into search box
      And user clicks on search button
      Then user should see wooden spoon in the title

