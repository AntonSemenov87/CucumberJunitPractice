package step_definitions.etsy_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Config;
import utilities.Driver;

public class etsySearch_StepDefs {

    @Given("user is on Etsy home page")
    public void user_is_on_Etsy_home_page() {
        Driver.getDriver().get(Config.getProperty("etsyURL"));
    }

    @When("user searches for wooden spoon")
    public void user_searches_for_wooden_spoon() {

    }

    @Then("user should see wooden spoon in Etsy title")
    public void user_should_see_wooden_spoon_in_Etsy_title() {

    }
}
