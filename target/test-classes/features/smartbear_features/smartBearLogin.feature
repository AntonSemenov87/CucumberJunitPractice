@smartbearLogin
Feature: SmartBear login verifications

  Agile Story: When user is on the login page of SmartBear, use should be able to login using correct test data

  A/C:
  1 - Only authenticated user should be able to login
  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx
  Authentication test data:
  Username: Tester
  Password: test
  2 - User should see "Welcome, Tester!" displayed when logged in

  Scenario: As a user I should be able to login using authenticated data
    When user lands on smartbear login page
    And user enters correct username
    And user enters correct password
    And user clicks on login button
    Then user should be logged in and see Welcome Tester text displayed

  Scenario: As a user I should not be logged in after using wrong username and password
    When user lands on smartbear login page
    And user enters incorrect username
    And user enters incorrect password
    And user clicks on login button
    Then user should see error message displayed on the page