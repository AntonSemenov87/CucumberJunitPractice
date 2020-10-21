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
  "status": "skipped"
});
formatter.step({
  "name": "user is on Etsy home page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user searches for wooden spoon",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should see wooden spoon in Etsy title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});