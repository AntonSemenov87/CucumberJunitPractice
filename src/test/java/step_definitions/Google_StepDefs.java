package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.google_pages.GoogleLandingPage;
import utilities.Driver;

public class Google_StepDefs {

    GoogleLandingPage googleLandingPage = new GoogleLandingPage();

    // verification of title "Google"
    @When("user is on google homepage")
    public void user_navigates_to_google_homepage() {
        Driver.getDriver().get("https://www.google.com");
    }

    @Then("user should see title containing Google")
    public void user_should_see_title_containing_Google() {
        String expectedInTitle = "Google";
        String actualInTitle = Driver.getDriver().getTitle();

        Assert.assertTrue("Title doesn't contain expected value", expectedInTitle.contains(actualInTitle));
    }

    @When("user types wooden spoon into search box")
    public void user_types_wooden_spoon_into_search_box() {
        googleLandingPage.googleSearchBox.sendKeys("wooden spoon" + Keys.ENTER);
    }

    @When("user clicks on search button")
    public void user_clicks_on_search_button() {
        //googleLandingPage.searchButton.click();
    }

    @Then("user should see wooden spoon in the title")
    public void user_should_see_wooden_spoon_in_the_title() throws InterruptedException {
        Thread.sleep(2000);
        String expectedInTitleAfterSearch = "wooden spoon";
        String actualInTitleAfterSearch = Driver.getDriver().getTitle();
       // System.out.println("This is the title after search: " + actualInTitleAfterSearch);
        Assert.assertTrue("Title doesn't contain expected phrase", actualInTitleAfterSearch.contains(expectedInTitleAfterSearch));
    }

}