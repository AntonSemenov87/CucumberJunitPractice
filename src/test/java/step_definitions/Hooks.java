package step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {

    @Before // cucumber.api.java! NOT junit
    public void setup() {
        // Anything you want to run before each scenario

    }

    @After // cucumber.api.java
    public void tearDown(Scenario scenario){
        //System.out.println(scenario.getName());
        //System.out.println(scenario.getStatus());
        if (scenario.isFailed()) {
            byte [] screenshot = ( (TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        Driver.closeDriver();
    }

}
