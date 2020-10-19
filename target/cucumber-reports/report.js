$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google feature verifications",
  "description": "  Agile Story: User stories, acceptance criteria\n  We can pass here any additional info related top this feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smokeTest"
    },
    {
      "name": "@regressionTest"
    }
  ]
});
formatter.scenario({
  "name": "Google title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest"
    },
    {
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "name": "user is on google homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Google_StepDefs.user_navigates_to_google_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see title containing Google",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_title_containing_Google()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Google title verification after searching a term",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest"
    },
    {
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "name": "user is on google homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Google_StepDefs.user_navigates_to_google_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user types wooden spoon into search box",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepDefs.user_types_wooden_spoon_into_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepDefs.user_clicks_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see wooden spoon in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_wooden_spoon_in_the_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/smartbear_features/smartBearLogin.feature");
formatter.feature({
  "name": "SmartBear login verifications",
  "description": "  Agile Story: When user is on the login page of SmartBear, use should be able to login using correct test data\n\n  A/C:\n  1 - Only authenticated user should be able to login\n  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\n  Authentication test data:\n  Username: Test\n  Password: tester\n  2 - User should see \"Welcome, Tester!\" displayed when logged in",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I should be able to login using authenticated data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user lands on smartbear login page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters correct username",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters correct password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should be logged in and see Welcome Tester text displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "As a user I should not be logged in after using wrong username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user lands on smartbear login page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should see error message displayed on the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});