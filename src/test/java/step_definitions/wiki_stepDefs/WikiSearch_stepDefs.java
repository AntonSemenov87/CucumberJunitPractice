package step_definitions.wiki_stepDefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.wikipedia_pages.WikiHomePage;
import utilities.Driver;

public class WikiSearch_stepDefs {

    WikiHomePage wikiHomePage = new WikiHomePage();

    @When("user is on Wikipedia homepage")
    public void user_is_on_Wikipedia_homepage() {
        Driver.getDriver().get("https://wikipedia.org");
    }

    @When("user types {string} in search box")
    public void user_types_in_search_box(String string) {
        wikiHomePage.searchBox.sendKeys(string);
    }

    @When("user clicks wiki search button")
    public void user_clicks_wiki_search_button() {
        wikiHomePage.searchButton.click();
    }

    @Then("user sees {string} is in the wiki title")
    public void user_sees_is_in_the_wiki_title(String string) {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedTitle = string + " - Wikipedia";
        Assert.assertTrue(actualTitle.equalsIgnoreCase(expectedTitle));
    }

    @Then("user sees {string} is in the main header")
    public void user_sees_is_in_the_main_header(String searchValue) {
        String actualHeader = wikiHomePage.mainHeader.getText();
        String expectedHeader = searchValue;

        Assert.assertTrue(actualHeader.equalsIgnoreCase(expectedHeader));
    }

    @Then("user sees {string} is in the image header")
    public void user_sees_is_in_the_image_header(String searchValue) {
        String actualImageHeader = wikiHomePage.imageHeader.getText();
        String expectedImageHeader = searchValue;

        Assert.assertTrue(actualImageHeader.equalsIgnoreCase(expectedImageHeader));
    }


}
