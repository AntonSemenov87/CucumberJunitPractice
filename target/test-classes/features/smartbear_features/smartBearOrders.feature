Feature: Smartbear order placing feature
  Agile story: when user is on Order page, user should be able to place order after filling out the form

  @smartBearForm
  Scenario Outline: User should be able to place order with different data sets
    Given user is logged in into SmartBear Tester account and on Order page
    And user selects "<product>" from product dropdown
    And user enters "<quantity>" into quantity
    And user enters "<customerName>" into customer name
    And user enters "<street>" into street
    And user enters "<city>" into city
    And user enters "<state>" into state
    And user enters "<zip>" into zip
    And user selects "<cardType>" as card type
    And user enters "<cardNumber>" into card number
    And user enters "<expirationDate>" into expiration date
    And user clicks process button
    Then user verifies "<expectedName>" is in the list

    Examples: data for tests - user fills out the form
      | product     | quantity | customerName   | street   | city         | state | zip   | cardType         | cardNumber | expirationDate | expectedName   |
      | MyMoney     | 2        | Anton Semenov  | Diversey | Chicago      | IL    | 60707 | Visa             | 4324567656 | 12/21          | Anton Semenov  |
      | FamilyAlbum | 1        | Vita Bezruchko | Diversey | Chicago      | IL    | 60707 | MasterCard       | 6457384675 | 10/22          | Vita Bezruchko |
      | ScreenSaver | 3        | No Name        | Belden   | Elmwood Park | IL    | 60622 | American Express | 5467567895 | 11/23          | No Name        |


