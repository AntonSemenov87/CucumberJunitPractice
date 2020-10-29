package test;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class ExcelWrite {
    public static void main(String[] args) throws IOException {

        XSSFWorkbook workbook;
        XSSFSheet sheet;
        XSSFRow row;
        XSSFCell cell;

        String path = "src/SampleData.xlsx";
        FileInputStream fileInputStream = new FileInputStream(path);

        // workbook > sheet > row > cell
        // loading excel workbook into class
        workbook = new XSSFWorkbook(fileInputStream);

        // get our sheet
        sheet = workbook.getSheet("Employees");

        // King's row
        row = sheet.getRow(1);
        // King's cell
        cell = row.getCell(1);

        // Task 1 --> storing Adams' name cell if you're using it frequently
        XSSFCell adamsCell = sheet.getRow(3).getCell(0);
        System.out.println("Before: " + adamsCell);
        adamsCell.setCellValue("Adam");
        System.out.println("After: " + adamsCell);

        // Task 2 --> change Steven's name to Tom
        for (int rowNum = 0; rowNum < sheet.getPhysicalNumberOfRows(); rowNum++){
            if (sheet.getRow(rowNum).getCell(0).toString().equalsIgnoreCase("Steven")) {
                sheet.getRow(rowNum).getCell(0).setCellValue("Tom");
            }
        }
        System.out.println(sheet.getRow(2).getCell(0));


        // Task 3 --> change Ricky Martin's job_id to retired
        for (int rowNum = 0; rowNum < sheet.getPhysicalNumberOfRows(); rowNum++){
            if (sheet.getRow(rowNum).getCell(0).toString().equalsIgnoreCase("Ricky")) {
                sheet.getRow(rowNum).getCell(2).setCellValue("retired");
            }
        }

        // create fileoutsream to specify which file we're writing to
        // these lines has to be at the very end
        FileOutputStream fileOutputStream = new FileOutputStream(path); // load
        workbook.write(fileOutputStream); // write
        fileInputStream.close();
        fileOutputStream.close();
        workbook.close();

    }
}
