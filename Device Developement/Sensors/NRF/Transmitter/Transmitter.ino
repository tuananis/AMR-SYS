/*
* Arduino Wireless Communication Tutorial
*     Example 1 - Transmitter Code
*                
* by Dejan Nedelkovski, www.HowToMechatronics.com
* 
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/
*/

#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <LiquidCrystal_I2C.h>

RF24 radio(7, 8); // CE, CSN
LiquidCrystal_I2C lcd(0x27, 20, 4);  

const byte addressSend[6] = "00001";
const byte addressReceive[6] = "00002";


void setup() {
  Serial.begin(9600);

  lcd.init();                    
  lcd.backlight();

  radio.begin();
  radio.openReadingPipe(0, addressReceive);
  radio.openWritingPipe(addressSend);

  radio.setPALevel(RF24_PA_MIN);

}


void loop() {

  radio.stopListening();

  int tx= random(0,10);
  String txt = "Hello Shiraza";
  char ttmp[15];
  txt.toCharArray(ttmp,txt.length());

  char text1[32];
  sprintf(text1,"%d is %s", tx, ttmp); 

  radio.write(&text1, sizeof(text1));

  delay(5);
  radio.startListening();
  if (radio.available()) {
    char text[32] = "";
    radio.read(&text, sizeof(text));
    
    lcd.clear();
    lcd.setCursor(0,0); lcd.print(text);
    Serial.println(text);
  }

  //delay(2000);
}
