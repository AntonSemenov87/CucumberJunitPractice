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
  "status": "passed"
});
formatter.step({
  "name": "user should see title containing Google",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_title_containing_Google()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user types wooden spoon into search box",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepDefs.user_types_wooden_spoon_into_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepDefs.user_clicks_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see wooden spoon in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_wooden_spoon_in_the_title()"
});
formatter.result({
  "status": "passed"
});
});