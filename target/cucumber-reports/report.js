$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/vytrack_features/CreateCalendarEventPage.feature");
formatter.feature({
  "name": "Activities Module: Create Calendar Events Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CCEP"
    }
  ]
});
formatter.scenario({
  "name": "Veryfy Default Fields for Calendar Events Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CCEP"
    },
    {
      "name": "@defaultFieldsCCEP"
    }
  ]
});
formatter.step({
  "name": "user is signed in as a sales manager",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_is_signed_in_as_a_sales_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on All Calendar Events page under the Activities tab",
  "keyword": "When "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_is_on_All_Calendar_Events_page_under_the_Activities_tab()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: Given xpath expression \"//span[contains(text(), \u0027Activities\u0027) and @class \u003d \u0027title title-level-1]\" is invalid: SyntaxError: The expression is not a legal expression.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VITA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200930150533, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 19508, moz:profile: C:\\Users\\Antho\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d43978c6-42d1-4acc-94af-f38410b6edc4\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(), \u0027Activities\u0027) and @class \u003d \u0027title title-level-1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.vytrack_pages.DashboardPage.navigateToModule(DashboardPage.java:16)\r\n\tat steps.vytrack_steps.CreateCalendarEventsPageSteps.user_is_on_All_Calendar_Events_page_under_the_Activities_tab(CreateCalendarEventsPageSteps.java:31)\r\n\tat ✽.user is on All Calendar Events page under the Activities tab(src/test/resources/features/vytrack_features/CreateCalendarEventPage.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is taken to the Create Calendar Events page after clicking the Create Calendar Event",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_is_taken_to_the_Create_Calendar_Events_page_after_clicking_the_Create_Calendar_Event()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see their name as the default value if the owner field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_should_see_their_name_as_the_default_value_if_the_owner_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the title field to be empty by default",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_should_see_the_title_field_to_be_empty_by_default()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see start date field with default value of the current date",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_should_see_start_date_field_with_default_value_of_the_current_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see start time field with default value of the current time",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.user_should_see_start_time_field_with_default_value_of_the_current_time()"
});
formatter.result({
  "status": "skipped"
});
});