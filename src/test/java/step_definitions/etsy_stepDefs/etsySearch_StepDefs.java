package step_definitions.etsy_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.etsy_pages.Etsy_HomePage;
import utilities.Config;
import utilities.Driver;

public class etsySearch_StepDefs {

    Etsy_HomePage etsy_homePage = new Etsy_HomePage();

    @Given("user is on Etsy home page")
    public void user_is_on_Etsy_home_page() {
        Driver.getDriver().get(Config.getProperty("etsyURL"));
    }

    @When("user searches for wooden spoon")
    public void user_searches_for_wooden_spoon() {
        etsy_homePage.searchBox.sendKeys("wooden spoon" + Keys.ENTER);
    }

    @Then("user should see wooden spoon in Etsy title")
    public void user_should_see_wooden_spoon_in_Etsy_title() {
        String expectedInTitle = "Wooden spoon";
        String actualInTitle = Driver.getDriver().getTitle();

        Assert.assertTrue(actualInTitle.contains(expectedInTitle));
    }


    @When("user searches for {string}")
    public void user_searches_for(String string) {

    }

    @Then("user should see {string} in Etsy title")
    public void user_should_see_in_Etsy_title(String string) {

    }
}
