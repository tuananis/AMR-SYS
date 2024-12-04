#include <LiquidCrystal_I2C.h>

// set the LCD number of columns and rows
int lcdColumns = 20;
int lcdRows = 4;

// set LCD address, number of columns and rows
// if you don't know your display address, run an I2C scanner sketch
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);  

void setup(){
  // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();

  lcd.clear();

   // set cursor to first column, first row
  lcd.setCursor(0, 0);
  lcd.print("      [ A M R ]       ");
  
  //lcd.setCursor(0, 1);
  //lcd.print("--------------------");

  lcd.setCursor(0, 1);
  lcd.print(" Utility Management");

  lcd.setCursor(0, 2);
  lcd.print("       System");

  lcd.setCursor(0, 3);
  lcd.print("Developed By: Anis");

  delay(2000);
  lcd.clear();
}

void loop(){

    lcd.setCursor(0, 0); lcd.print("2024-09-16");
  lcd.setCursor(12, 0); lcd.print("20:15:23");
  lcd.setCursor(0, 1); lcd.print("--------------------");
  lcd.setCursor(0, 2); lcd.print("Usage kWh : 3254");
  lcd.setCursor(0, 3); lcd.print("Unit      : 3");


}