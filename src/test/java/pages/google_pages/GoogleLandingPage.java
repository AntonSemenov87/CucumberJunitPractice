package pages.google_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GoogleLandingPage {

    public GoogleLandingPage (){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    // locating search input field
    @FindBy (name = "q")
    public WebElement googleSearchBox;

    // locating search button
    @FindBy (xpath = "(//input[@value=])[2]")
    public WebElement searchButton;

}
