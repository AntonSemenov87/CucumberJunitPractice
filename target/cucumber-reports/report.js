$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/etsy_features/etsySearching.feature");
formatter.feature({
  "name": "Etsy search functionality",
  "description": "  Agile story:\n  Jira #CBT-25",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Etsy search title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@etsy"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Etsy home page",
  "keyword": "Given "
});
formatter.match({
  "location": "etsySearch_StepDefs.user_is_on_Etsy_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"wooden spoon\"",
  "keyword": "When "
});
formatter.match({
  "location": "etsySearch_StepDefs.user_searches_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Wooden spoon\" in Etsy title",
  "keyword": "Then "
});
formatter.match({
  "location": "etsySearch_StepDefs.user_should_see_in_Etsy_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Etsy search title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@etsy2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Etsy home page",
  "keyword": "Given "
});
formatter.match({
  "location": "etsySearch_StepDefs.user_is_on_Etsy_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"custom wooden spoon\"",
  "keyword": "When "
});
formatter.match({
  "location": "etsySearch_StepDefs.user_searches_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Custom wooden spoon\" in Etsy title",
  "keyword": "Then "
});
formatter.match({
  "location": "etsySearch_StepDefs.user_should_see_in_Etsy_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});