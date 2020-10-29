package pages.smartbear_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SBOrderPage {
    public SBOrderPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (id = "ctl00_MainContent_fmwOrder_ddlProduct")
    public WebElement productDropdown;

    @FindBy (id = "ctl00_MainContent_fmwOrder_txtQuantity")
    public WebElement quantity;

    @FindBy (id = "ctl00_MainContent_fmwOrder_txtName")
    public WebElement customerName;

    @FindBy (id = "ctl00_MainContent_fmwOrder_TextBox2")
    public WebElement street;

    @FindBy (id = "ctl00_MainContent_fmwOrder_TextBox3")
    public WebElement city;

    @FindBy (id = "ctl00_MainContent_fmwOrder_TextBox4")
    public WebElement state;

    @FindBy (id = "ctl00_MainContent_fmwOrder_TextBox5")
    public WebElement zip;

    @FindBy (id = "ctl00_MainContent_fmwOrder_cardList_0")
    public WebElement visaCard;

    @FindBy (id = "ctl00_MainContent_fmwOrder_cardList_1")
    public WebElement masterCard;

    @FindBy (id = "ctl00_MainContent_fmwOrder_cardList_2")
    public WebElement amExCard;

    @FindBy (id = "ctl00_MainContent_fmwOrder_TextBox6")
    public WebElement cardNumberInput;

    @FindBy (id = "ctl00_MainContent_fmwOrder_TextBox1")
    public WebElement expirationDate;

    @FindBy (id = "ctl00_MainContent_fmwOrder_InsertButton")
    public WebElement processButton;

}
