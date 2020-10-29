package step_definitions.smartbear_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pages.smartbear_pages.SBLandingPage;
import pages.smartbear_pages.SBLoginPage;
import pages.smartbear_pages.SBOrderPage;
import pages.smartbear_pages.SBViewAllOrdersPage;
import utilities.Config;
import utilities.Driver;

public class smartBearOrderPlace_form {

    SBLoginPage sbLoginPage = new SBLoginPage();
    SBLandingPage sbLandingPage = new SBLandingPage();
    SBOrderPage sbOrderPage = new SBOrderPage();
    SBViewAllOrdersPage sbViewAllOrdersPage = new SBViewAllOrdersPage();

    @Given("user is logged in into SmartBear Tester account and on Order page")
    public void user_is_logged_in_into_SmartBear_Tester_account_and_on_Order_page() {
        Driver.getDriver().get(Config.getProperty("smartbearURL"));
        sbLoginPage.usernameField.sendKeys("Tester");
        sbLoginPage.passwordField.sendKeys("test");
        sbLoginPage.loginButton.click();

        sbLandingPage.orderLink.click();
        }

    @Given("user selects {string} from product dropdown")
    public void user_selects_from_product_dropdown(String dropdownValue) {
        Select productDropdown = new Select(sbOrderPage.productDropdown);
        productDropdown.selectByVisibleText(dropdownValue);
    }

    @Given("user enters {string} into quantity")
    public void user_enters_into_quantity(String givenQuantity) {
        sbOrderPage.quantity.sendKeys(Keys.BACK_SPACE, givenQuantity);
    }

    @Given("user enters {string} into customer name")
    public void user_enters_into_customer_name(String customerName) {
        sbOrderPage.customerName.sendKeys(customerName);
    }

    @Given("user enters {string} into street")
    public void user_enters_into_street(String street) {
        sbOrderPage.street.sendKeys(street);
    }

    @Given("user enters {string} into city")
    public void user_enters_into_city(String city) {
        sbOrderPage.city.sendKeys(city);
    }

    @Given("user enters {string} into state")
    public void user_enters_into_state(String state) {
        sbOrderPage.state.sendKeys(state);
    }

    @Given("user enters {string} into zip")
    public void user_enters_into_zip(String zip) {
        sbOrderPage.zip.sendKeys(zip);
    }

    @Given("user selects {string} as card type")
    public void user_selects_as_card_type(String cardType) {
        if (cardType.equalsIgnoreCase("Visa")) {
            sbOrderPage.visaCard.click();
        } else if (cardType.equalsIgnoreCase("MasterCard")) {
            sbOrderPage.masterCard.click();
        } else if (cardType.equalsIgnoreCase("American Express")) {
            sbOrderPage.amExCard.click();
        } else {
            Assert.assertTrue("Invalid card type", false);
        }
    }

    @Given("user enters {string} into card number")
    public void user_enters_into_card_number(String cardNumber) {
        sbOrderPage.cardNumberInput.sendKeys(cardNumber);
    }

    @Given("user enters {string} into expiration date")
    public void user_enters_into_expiration_date(String expDate) {
        sbOrderPage.expirationDate.sendKeys(expDate);
    }

    @Given("user clicks process button")
    public void user_clicks_process_button() {
        sbOrderPage.processButton.click();
    }

    @Then("user verifies {string} is in the list")
    public void user_verifies_is_in_the_list(String customerName) throws InterruptedException {
        sbViewAllOrdersPage.viewAllOrdersLink.click();
        Thread.sleep(3);
        String newOrderNameCell = sbViewAllOrdersPage.newOrderNameCell.getText();
        Assert.assertTrue(newOrderNameCell.equalsIgnoreCase(customerName));
    }

}
