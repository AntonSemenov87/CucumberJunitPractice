package test;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Test;
import pages.gasmileagecalc_pages.GasMileageCalculatorPage;
import utilities.Driver;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DecimalFormat;

public class GasMileageTest_unfinished {
    XSSFWorkbook workbook;
    XSSFSheet sheet;
    FileInputStream fileInputStream;
    FileOutputStream fileOutputStream;
    GasMileageCalculatorPage gasMileageCalculatorPage = new GasMileageCalculatorPage();

    @Test
    public void gasMileageCalculatortest() throws IOException {
        Driver.getDriver().get("https://www.calculator.net/gas-mileage-calculator.html");

        String path = "src/test/resources/testdata/GasMileageTestData.xlsx";
        // loading file to class
        fileInputStream = new FileInputStream(path);
        // loading workbook to class
        workbook = new XSSFWorkbook(fileInputStream);
        sheet = workbook.getSheet("Sheet 1");
        XSSFRow currentRow = sheet.getRow(1);

        //double current = 123000;
        double current = currentRow.getCell(1).getNumericCellValue();
        gasMileageCalculatorPage.currentOdo.clear();
        gasMileageCalculatorPage.currentOdo.sendKeys(String.valueOf(current));

        //double previous = 122000;
        double previous = currentRow.getCell(2).getNumericCellValue();
        gasMileageCalculatorPage.previousOdo.clear();
        gasMileageCalculatorPage.previousOdo.sendKeys(String.valueOf(previous));

        //double gas = 70;
        double gas = currentRow.getCell(3).getNumericCellValue();
        gasMileageCalculatorPage.gasInput.clear();
        gasMileageCalculatorPage.gasInput.sendKeys(String.valueOf(gas));

        gasMileageCalculatorPage.calculateButton.click();

        double expectedResult = (current - previous) / gas;
        System.out.println(expectedResult);

        String [] actualResult = gasMileageCalculatorPage.resultInGas.getText().split(" ");
        System.out.println("Actual result: " + actualResult[0]);

        DecimalFormat decimalFormat = new DecimalFormat("#0.00");
        System.out.println("Fromatted version: " + decimalFormat.format(expectedResult));

        // creates the cell if current cell is empty (null)
        // sending expected value from our formula
        if (currentRow.getCell(4) == null) {
            currentRow.createCell(4);
        }
        if (currentRow.getCell(5) == null) {
            currentRow.createCell(5);
        }


        currentRow.createCell(4).setCellValue(decimalFormat.format(expectedResult));
        currentRow.createCell(5).setCellValue(actualResult[0]);


        if (String.valueOf(decimalFormat.format(expectedResult)).equals(actualResult[0])) {
            if (currentRow.getCell(6) == null) {
                currentRow.createCell(6);
            }
            currentRow.getCell(6).setCellValue("Pass");
            System.out.println("Pass");
        } else {
            if (currentRow.getCell(6) == null) {
                currentRow.createCell(6);
            }
            currentRow.getCell(6).setCellValue("Fail");
            System.out.println("Fail");
        }

        fileOutputStream = new FileOutputStream(path);
        workbook.write(fileOutputStream);

        workbook.close();
        fileOutputStream.close();
        fileInputStream.close();




    }

}
