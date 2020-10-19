$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear_features/smartBearLogin.feature");
formatter.feature({
  "name": "SmartBear login verifications",
  "description": "  Agile Story: When user is on the login page of SmartBear, use should be able to login using correct test data\n\n  A/C:\n  1 - Only authenticated user should be able to login\n  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\n  Authentication test data:\n  Username: Tester\n  Password: test\n  2 - User should see \"Welcome, Tester!\" displayed when logged in",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smartbearLogin"
    }
  ]
});
formatter.scenario({
  "name": "As a user I should be able to login using authenticated data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smartbearLogin"
    }
  ]
});
formatter.step({
  "name": "user lands on smartbear login page",
  "keyword": "When "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_lands_on_smartbear_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters correct username",
  "keyword": "And "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_enters_correct_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters correct password",
  "keyword": "And "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_enters_correct_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be logged in and see Welcome Tester text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_should_be_logged_in_and_see_Welcome_Tester_text_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I should not be logged in after using wrong username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smartbearLogin"
    }
  ]
});
formatter.step({
  "name": "user lands on smartbear login page",
  "keyword": "When "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_lands_on_smartbear_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters incorrect username",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters incorrect password",
  "keyword": "And "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_enters_incorrect_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see error message displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SBLogin_StepDefs.user_should_see_error_message_displayed_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
});