package steps.smartbear_stepDefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.smartbear_pages.SBLoginPage;
import pages.smartbear_pages.SBWebOrdersPage;
import utilities.Config;
import utilities.Driver;

public class SBLogin_StepDefs {

    SBLoginPage sbLoginPage = new SBLoginPage();
    SBWebOrdersPage sbWebOrdersPage = new SBWebOrdersPage();

    @When("user lands on smartbear login page")
    public void user_lands_on_smartbear_login_page() {
        Driver.getDriver().get(Config.getProperty("smartbearURL"));
    }

    @When("user enters correct username")
    public void user_enters_correct_username() {
        sbLoginPage.usernameField.sendKeys("Tester");
    }

    @When("user enters correct password")
    public void user_enters_correct_password() {
        sbLoginPage.passwordField.sendKeys("test");
    }

    @When("user clicks on login button")
    public void user_clicks_on_login_button() {
        sbLoginPage.loginButton.click();
    }

    @Then("user should be logged in and see Welcome Tester text displayed")
    public void user_should_be_logged_in_and_see_Welcome_Tester_text_displayed() {
        String expectedInTitle = "Web Orders";
        String actualInTitle = Driver.getDriver().getTitle();
        Assert.assertTrue("User didn't land on Web Orders page", actualInTitle.equalsIgnoreCase(expectedInTitle));

        String expectedInLoginInfo = "Welcome, Tester";
        String actualInLoginInfo = sbWebOrdersPage.loginInfo.getText();
        Assert.assertTrue(actualInLoginInfo.contains(expectedInLoginInfo));
    }


    @When("user enters incorrect username")
    public void user_enters_incorrect_username() {
        sbLoginPage.usernameField.sendKeys("FakeUsername");
    }

    @When("user enters incorrect password")
    public void user_enters_incorrect_password() {
       sbLoginPage.passwordField.sendKeys("fakePassword");
    }

    @Then("user should see error message displayed on the page")
    public void user_should_see_error_message_displayed_on_the_page() {
        Assert.assertTrue(sbLoginPage.errorMessage.isDisplayed());
    }

}
