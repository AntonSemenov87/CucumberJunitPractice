package pages.smartbear_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SBWebOrdersPage {
    public SBWebOrdersPage () {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//div[@class='login_info']")
    public WebElement loginInfo;
}
