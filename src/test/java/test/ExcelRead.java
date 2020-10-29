package test;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ExcelRead {
    public static void main(String[] args) throws IOException {

        File file = new File("src/SampleData.xlsx");

        //System.out.println(file.exists());


        // Load file into java memory using FileInputStream
        FileInputStream fileInputStream = new FileInputStream(file);

        // load excel workbook into java class
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        // workbook > sheet > row > cell
         // getting sheet from workbook
        XSSFSheet sheet = workbook.getSheet("Employees");

        // hot to get Sandler from Excel sheet
        sheet.getRow(3).getCell(1);
        System.out.println(sheet.getRow(3).getCell(1));

        int usedRows = sheet.getPhysicalNumberOfRows(); // count of used cells even if there is space between rows, empty will not be counted, starts from 1
        int lastUsedRow = sheet.getLastRowNum(); // will count from top to bottom, doesn't care if empty cell or used cell, starts from 0

        for (int rowNum = 0; rowNum < usedRows; rowNum++) {
            if (sheet.getRow(rowNum).getCell(0).toString().equals("Ricky")) {
                System.out.println("Ricky's last name: " + sheet.getRow(rowNum).getCell(1));
            }
        }



    }
}
