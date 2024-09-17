#include <LiquidCrystal_I2C.h>
#include <RTClib.h>
#include <ezButton.h>
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <EEPROM.h>

//Button 
#define KEY_NUM 4  // the number of keys
#define PIN_KEY_1 43  // key 1
#define PIN_KEY_2 45  // key 2
#define PIN_KEY_3 47  // key 3
#define PIN_KEY_4 49  // key 4

ezButton keypad_1x4[] = {
  ezButton(PIN_KEY_1),
  ezButton(PIN_KEY_2),
  ezButton(PIN_KEY_3),
  ezButton(PIN_KEY_4)
};

RF24 radio(7, 8); // CE, CSN
RTC_DS3231 rtc;
LiquidCrystal_I2C lcd(0x27, 20, 4);  //LCD Size 20X4

//Date Time Variable
String strDate;
String strTime;
String strDofW;
char daysOfWeek[7][12] = {  "Sunday",  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday"};

//Vibration
int vibrationValue;

//RF Address
const byte addressSend[6] = "00001";
const byte addressReceive[6] = "00002";


//Flow Sensor
byte sensorInterrupt = 0;  // 0 = digital pin 2
byte sensorPin       = 2;
float calibrationFactor = 4.5; // The hall-effect flow sensor outputs approximately 4.5 pulses per second per litre/min
volatile byte pulseCount;  
float flowRate;
unsigned int flowMilliLitres;
unsigned long totalMilliLitres;
unsigned long oldTime;
unsigned int totalUnits;

//Water Cost Calculation
int vUnitUse=0;
int vUnitPrice=0;
int vFixedPrice=0;

int menuId=0;

void setup () {
  Serial.begin(9600);

  radio.begin();
  radio.openReadingPipe(0, addressReceive);
  radio.openWritingPipe(addressSend);
  radio.setPALevel(RF24_PA_MIN);

  lcd.init();                   
  lcd.backlight();
  lcd.clear();

  if (! rtc.begin()) {
    Serial.println("RTC module is NOT found");
    Serial.flush();
    while (1);
  }

  for (byte i = 0; i < KEY_NUM; i++) {
    keypad_1x4[i].setDebounceTime(100);  // set debounce time to 100 milliseconds
  }

  displayMainScreen();

  // writeStringToEEPROM(0, "Hello");
  // String retrievedString = readStringFromEEPROM(0);
  // Serial.print("The String we read from EEPROM: ");
  // Serial.println(retrievedString);

  // writeIntIntoEEPROM(45, 18404);
  // int number = readIntFromEEPROM(45);
  // Serial.println("From EEPROM :" + String(number));

  writeIntIntoEEPROM(0, 450);
  writeIntIntoEEPROM(1025,125);

  //Flow Sesnsor initialisation
  pinMode(sensorPin, INPUT);
  digitalWrite(sensorPin, HIGH);
  pulseCount        = 0;
  flowRate          = 0.0;
  flowMilliLitres   = 0;
  totalMilliLitres  = 0;
  oldTime           = 0; 
  totalUnits        = 0;
  attachInterrupt(sensorInterrupt, pulseCounter, FALLING);

  menuId=0;

}

void loop () {
  //Date Time Call
  DateTime now = rtc.now();
  strDate = String(now.year(),DEC) + "-" + String(now.month(), DEC) + "-" + String(now.day(), DEC);
  strTime=String(now.hour(), DEC) + ":" + String(now.minute(), DEC) + ":" + String(now.second(), DEC);
  strDofW= daysOfWeek[now.dayOfTheWeek()];

  //Vibration Call
  vibrationValue = digitalRead(5);
  
  //Button Call
  int key = getKeyPressed();
  if (key==1)
  {
    lcd.clear();
    menuId=2;
  }

  if (menuId==0)
  {
    displayMeterReadingScreen();
  }
  else if(menuId==2){
    displayMeterReadingDailyScreen();
  }

  //Flow sensor read
  if((millis() - oldTime) > 1000)    // Only process counters once per second
  { 
    detachInterrupt(sensorInterrupt);
    flowRate = ((1000.0 / (millis() - oldTime)) * pulseCount) / calibrationFactor;
    oldTime = millis();
    flowMilliLitres = (flowRate / 60) * 1000;
    totalMilliLitres += flowMilliLitres;
    totalUnits=(totalMilliLitres/1000)/1000;
    unsigned int frac; 
    pulseCount = 0;
    attachInterrupt(sensorInterrupt, pulseCounter, FALLING);

    writeIntIntoEEPROM(0, readIntFromEEPROM(0) + (totalMilliLitres/1000));
    writeIntIntoEEPROM(1025, readIntFromEEPROM(1025) + totalUnits);

  }
  //Display flow rate
  displayFlowData();

  //Data transmit to the main unit
  receiveRFData();
  transmitRFData();

  delay(500); // delay 100 millisecond
}

//Real Time Clock
void receiveDateTime()
{
  //Serial.println("Current Date:" + strDate);
  //Serial.println("Current Time:" + strTime);
  //Serial.println("Date of Week:" + strDofW); 

  lcd.clear();
  lcd.setCursor(0, 0); lcd.print("Date:" + strDate);
  lcd.setCursor(0, 1); lcd.print("Time:" + strTime); 
}

//LCD Main Screen display
void displayMainScreen()
{
  lcd.clear();

  lcd.setCursor(0, 0);
  lcd.print("      [ A M R ]       ");

  lcd.setCursor(0, 1);
  lcd.print(" Utility Management");

  lcd.setCursor(0, 2);
  lcd.print("       System");

  lcd.setCursor(0, 3);
  lcd.print("Developed By: Anis");
  delay(2000);
  lcd.clear();
}

//LCD Reading Screen display
void displayMeterReadingScreen()
{
  lcd.setCursor(0, 0); lcd.print(strDate);
  lcd.setCursor(12, 0); lcd.print(strTime);
  lcd.setCursor(0, 1); lcd.print("--------------------");
  lcd.setCursor(0, 2); lcd.print("Usage Ltr:" + String(readIntFromEEPROM(0)));
  lcd.setCursor(0, 3); lcd.print("Unit     :" + String(readIntFromEEPROM(1025)));
}

void displayMeterReadingDailyScreen()
{
  //lcd.setCursor(0, 0); lcd.print(strDate);
  //lcd.setCursor(12, 0); lcd.print(strTime);
  lcd.setCursor(0, 0); lcd.print("Today Consumption");
  //lcd.setCursor(0, 1); lcd.print("--------------------");
  lcd.setCursor(0, 1); lcd.print("Usage Ltr:" + String(readIntFromEEPROM(0)));
  lcd.setCursor(0, 2); lcd.print("Unit     :" + String(readIntFromEEPROM(1025)));
  lcd.setCursor(0, 3); lcd.print("Cost  RS :" + String(calculateWaterCost(readIntFromEEPROM(0))));

  //calculateWaterCost
}

void displayFlowData()
{
  // Print the flow rate for this second in litres / minute
  // Serial.print("Flow rate: ");
  // Serial.print(int(flowRate));  // Print the integer part of the variable
  // Serial.print("L/min");
  // Serial.print("\t"); 		  // Print tab space
  // Serial.println(); 	

  // Print the cumulative total of litres flowed since starting
  Serial.print("Output Liquid Quantity: ");        
  // Serial.print(totalMilliLitres);
  // Serial.println("mL"); 
  // Serial.print("\t"); 		  // Print tab space
  Serial.print(totalMilliLitres/1000);
  Serial.print("L");
  Serial.println(); 	
}

//RF Data Tramission TX RX
void transmitRFData()
{
  int tLitre=readIntFromEEPROM(0);
  int tUnit=readIntFromEEPROM(1025);
  int tCost=calculateWaterCost(readIntFromEEPROM(0));
  radio.stopListening();

  //int tx= random(0,10);
  //String txt = "Hello Shiraza";
  //char ttmp[15];
  //txt.toCharArray(ttmp,txt.length());

  char text1[32];
  sprintf(text1,"%d : %d : %d", tLitre,tUnit,tCost); 
  Serial.println(text1);

  radio.write(&text1, sizeof(text1));
  delay(5);
}



void receiveRFData()
{
  radio.startListening();
  if (radio.available()) {
    char text[32] = "";
    radio.read(&text, sizeof(text));
    
    lcd.clear();
    lcd.setCursor(0,0); lcd.print(text);
    //lcd.setCursor(0,1); lcd.print(String(tx));
  }
}

//EEPROM Operations
void writeStringToEEPROM(int addrOffset, const String &strToWrite)
{
  byte len = strToWrite.length();
  EEPROM.write(addrOffset, len);
  for (int i = 0; i < len; i++)
  {
    EEPROM.write(addrOffset + 1 + i, strToWrite[i]);
  }
}

String readStringFromEEPROM(int addrOffset)
{
  int newStrLen = EEPROM.read(addrOffset);
  char data[newStrLen + 1];
  for (int i = 0; i < newStrLen; i++)
  {
    data[i] = EEPROM.read(addrOffset + 1 + i);
  }
  data[newStrLen] = '\ 0'; // !!! NOTE !!! Remove the space between the slash "/" and "0" (I've added a space because otherwise there is a display bug)
  String vTemp= data;
  int textEnd = vTemp.indexOf("0");
  vTemp = vTemp.substring(0, textEnd);

  Serial.println("Availabl on: " + vTemp);
  
  return String(data);
}

void writeIntIntoEEPROM(int address, int number)
{ 
  EEPROM.write(address, number >> 8);
  EEPROM.write(address + 1, number & 0xFF);
}

int readIntFromEEPROM(int address)
{
  byte byte1 = EEPROM.read(address);
  byte byte2 = EEPROM.read(address + 1);
  return (byte1 << 8) + byte2;
}

//Button press event detect
int getKeyPressed() {
  for (byte i = 0; i < KEY_NUM; i++)
    keypad_1x4[i].loop();  // call the loop() function

  for (byte i = 0; i < KEY_NUM; i++) {
    // get key state after debounce
    int key_state = keypad_1x4[i].getState();  // state after debounce

    if (keypad_1x4[i].isPressed())
      return (i + 1);
  }

  return 0;
}

float calculateWaterCost(int vMvalue)
{
    if(vMvalue>5)
    {
      vUnitPrice = 5*60;
    }

    if((vMvalue-5)>0 && (vMvalue-5)<10)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-5) * 80);
    }

    if((vMvalue-10)>0 && (vMvalue-10)<15)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-10) * 100);
    }

    if((vMvalue-15)>0 && (vMvalue-15)<20)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-15) * 110);
    }

    if((vMvalue-20)>0 && (vMvalue-20)<25)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-20) * 130);
    }

    if((vMvalue-25)>0 && (vMvalue-25)<30)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-25) * 160);
    }

    if((vMvalue-30)>0 && (vMvalue-30)<40)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-30) * 180);
    }

    if((vMvalue-40)>0 && (vMvalue-40)<50)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-40) * 210);
    }

    if((vMvalue-50)>0 && (vMvalue-50)<75)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-50) * 240);
    }

    if((vMvalue-75)>0 && (vMvalue-75)<100)
    {
      vUnitPrice=vUnitPrice + ((vMvalue-75) * 270);
    }

    //Calculate the Fixed Cost
    if (vMvalue<=16){
      vFixedPrice=300; 
    }else if (vMvalue<=20){
        vFixedPrice=400;
    }else if (vMvalue<=25){
        vFixedPrice=500;
    }else if (vMvalue<=30){
        vFixedPrice=600;
    }else if (vMvalue<=40){
        vFixedPrice=1500;
    }else if (vMvalue<=52){
        vFixedPrice=3000;
    }else if (vMvalue<=75){
        vFixedPrice=3500;
    }else if (vMvalue<=100){
        vFixedPrice=4000;
    }else{
        vFixedPrice=4500;
    }

    return vUnitPrice+vFixedPrice;
}

//Vibration Detect
void vibrationDetect()
{
  Serial.println(vibrationValue);
  if (vibrationValue>=1)
  {
    Serial.println("Tamper Detected");
  }
}

//Insterrupt Service Routine
void pulseCounter()
{
  // Increment the pulse counter
  pulseCount++;
}
