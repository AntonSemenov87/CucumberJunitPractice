package pages.vytrack_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CreateCalendarEventsPage {

    public CreateCalendarEventsPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "[title='Create Calendar event']")
    public WebElement createCalendarEventButton;

    @FindBy(css = ".select2-chosen")
    public WebElement ownerField;

    @FindBy(css = "#user-menu")
    public WebElement loginUser;

    @FindBy(css="[id^='oro_calendar_event_form_title-uid']")
    public WebElement titleField;

    @FindBy(css = "[id^='date_selector_oro_calendar_event_form_start-uid']")
    public WebElement startDate;

    @FindBy(css = "[id^='time_selector_oro_calendar_event_form_start-uid']")
    public WebElement startTime;

    @FindBy (css = "[id^='recurrence-repeat-view']")
    public WebElement repeatCheckbox;

    @FindBy(css = "[id^='recurrence-repeats-view']")
    public WebElement repeatDropdown;

}
