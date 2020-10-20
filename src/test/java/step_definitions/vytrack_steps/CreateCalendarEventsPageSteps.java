package step_definitions.vytrack_steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.vytrack_pages.CreateCalendarEventsPage;
import pages.vytrack_pages.DashboardPage;
import pages.vytrack_pages.LoginPage;
import utilities.Config;
import utilities.Driver;
import utilities.SeleniumUtils;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class CreateCalendarEventsPageSteps {

    LoginPage loginPage = new LoginPage();
    CreateCalendarEventsPage createCalendarEventsPage = new CreateCalendarEventsPage();

    @Given("user is signed in as a sales manager")
    public void user_is_signed_in_as_a_sales_manager() {
        Driver.getDriver().get(Config.getProperty("vytrackURL"));
        loginPage.usernameInput.sendKeys(Config.getProperty("vytrackUsername"));
        loginPage.passwordInput.sendKeys(Config.getProperty("vytrackPassword"));
        loginPage.loginButton.click();
    }

    @When("user is on All Calendar Events page under the Activities tab")
    public void user_is_on_All_Calendar_Events_page_under_the_Activities_tab() {
        DashboardPage.navigateToModule("Activities", "Calendar  Events");
    }

    @When("user is taken to the Create Calendar Events page after clicking the Create Calendar Event")
    public void user_is_taken_to_the_Create_Calendar_Events_page_after_clicking_the_Create_Calendar_Event() {
        createCalendarEventsPage.createCalendarEventButton.click();
        String expectedInTitle = "Create Calendar event";
        String actualInTitle = Driver.getDriver().getTitle();
        Assert.assertTrue("title is wrong", actualInTitle.contains(expectedInTitle));
    }

    @When("user should see their name as the default value if the owner field")
    public void user_should_see_their_name_as_the_default_value_if_the_owner_field() {
        String ownerName = createCalendarEventsPage.ownerField.getText().trim();
        String loginName = createCalendarEventsPage.loginUser.getText().trim();
        Assert.assertEquals("owner's name is incorerct", ownerName, loginName);
    }

    @When("user should see the title field to be empty by default")
    public void user_should_see_the_title_field_to_be_empty_by_default() {
        Assert.assertTrue(createCalendarEventsPage.titleField.getText().isEmpty());
    }

    @When("user should see start date field with default value of the current date")
    public void user_should_see_start_date_field_with_default_value_of_the_current_date() {
        String expectedDate = LocalDate.now().format(DateTimeFormatter.ofPattern("MM d yyy"));
        String actualDate = createCalendarEventsPage.startDate.getAttribute("value");
        Assert.assertEquals("time is not current", actualDate, expectedDate);
    }

    @When("user should see start time field with default value of the current time")
    public void user_should_see_start_time_field_with_default_value_of_the_current_time() {
        String expectedTime = LocalTime.now().minusHours(2).format(DateTimeFormatter.ofPattern("h:mm a"));
        String actualTime = createCalendarEventsPage.startTime.getAttribute("value");
        Assert.assertEquals("time is not current", expectedTime, actualTime);
    }

    @When("user clicks on Repeat checkbox")
    public void user_clicks_on_Repeat_checkbox() {
        createCalendarEventsPage.repeatCheckbox.click();
    }

    @Then("user should see Repeats select field with following options: Daily, Weekly, Monthly, Yearly")
    public void user_should_see_Repeats_select_field_with_following_options_Daily_Weekly_Monthly_Yearly() {
        List<String> actualOptions = SeleniumUtils.getAllSelectOptions(createCalendarEventsPage.repeatDropdown);
        List<String> expectedOptions = new ArrayList<>();
        expectedOptions.add("Daily");
        expectedOptions.add("Weekly");
        expectedOptions.add("Monthly");
        expectedOptions.add("Yearly");
        Assert.assertEquals(expectedOptions, actualOptions);
    }



}
