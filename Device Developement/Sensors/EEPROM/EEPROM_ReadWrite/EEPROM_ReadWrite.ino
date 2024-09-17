#include <EEPROM.h>

//EEPROM
int EEsize = 1024;
int eepAddressCurrentMeterValue=0;
int eepAddressCurrentDate=0;

int eepAddressPreviouseMeterValue=0;
int eepAddressPreviouseDate=0;

int vData;

void setup() {
  Serial.begin(9600);

  writeStringToEEPROM(0, "Hello");
  String retrievedString = readStringFromEEPROM(0);
  Serial.print("The String we read from EEPROM: ");
  Serial.println(retrievedString);

  writeIntIntoEEPROM(45, 18404);
  int number = readIntFromEEPROM(45);
  Serial.println("From EEPROM :" + String(number));

}

void loop() {
  // put your main code here, to run repeatedly:

}


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