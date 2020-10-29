$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear_features/smartBearOrders.feature");
formatter.feature({
  "name": "Smartbear order placing feature",
  "description": "  Agile story: when user is on Order page, user should be able to place order after filling out the form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBearForm"
    }
  ]
});
formatter.step({
  "name": "user is logged in into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.step({
  "name": "user selects \"\u003cproduct\u003e\" from product dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cquantity\u003e\" into quantity",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003ccustomerName\u003e\" into customer name",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cstreet\u003e\" into street",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003ccity\u003e\" into city",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cstate\u003e\" into state",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003czip\u003e\" into zip",
  "keyword": "And "
});
formatter.step({
  "name": "user selects \"\u003ccardType\u003e\" as card type",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003ccardNumber\u003e\" into card number",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cexpirationDate\u003e\" into expiration date",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks process button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies \"\u003cexpectedName\u003e\" is in the list",
  "keyword": "Then "
});
formatter.examples({
  "name": "data for tests - user fills out the form",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "customerName",
        "street",
        "city",
        "state",
        "zip",
        "cardType",
        "cardNumber",
        "expirationDate",
        "expectedName"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "2",
        "Anton Semenov",
        "Diversey",
        "Chicago",
        "IL",
        "60707",
        "Visa",
        "4324567656",
        "12/21",
        "Anton Semenov"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "1",
        "Vita Bezruchko",
        "Diversey",
        "Chicago",
        "IL",
        "60707",
        "MasterCard",
        "6457384675",
        "10/22",
        "Vita Bezruchko"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "3",
        "No Name",
        "Belden",
        "Elmwood Park",
        "IL",
        "60622",
        "American Express",
        "5467567895",
        "11/23",
        "No Name"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBearForm"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged in into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_is_logged_in_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"2\" into quantity",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Anton Semenov\" into customer name",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_customer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Diversey\" into street",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Chicago\" into city",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"IL\" into state",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60707\" into zip",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"4324567656\" into card number",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12/21\" into expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies \"Anton Semenov\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBearForm"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged in into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_is_logged_in_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"FamilyAlbum\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1\" into quantity",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Vita Bezruchko\" into customer name",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_customer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Diversey\" into street",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Chicago\" into city",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"IL\" into state",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60707\" into zip",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"MasterCard\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"6457384675\" into card number",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"10/22\" into expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies \"Vita Bezruchko\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBearForm"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged in into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_is_logged_in_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"ScreenSaver\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"3\" into quantity",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"No Name\" into customer name",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_customer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Belden\" into street",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Elmwood Park\" into city",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"IL\" into state",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60622\" into zip",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"American Express\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"5467567895\" into card number",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"11/23\" into expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_enters_into_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies \"No Name\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "smartBearOrderPlace_form.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});