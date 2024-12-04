#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <LiquidCrystal_I2C.h>

RF24 radio(7, 8); // CE, CSN
LiquidCrystal_I2C lcd(0x27, 20, 4);  


const byte addressSend[6] = "00002";
const byte addressReceive[6] = "00001";

void setup() {
  Serial.begin(9600);
  radio.begin();
  radio.openReadingPipe(0, addressReceive);
  radio.openWritingPipe(addressSend);
  radio.setPALevel(RF24_PA_MIN);
    lcd.init();                    
  lcd.backlight();

}

void loop() {
  radio.startListening();
  if (radio.available()) {
    char text1[32] = "";
    radio.read(&text1, sizeof(text1));
    Serial.println(text1);

        lcd.clear();
    lcd.setCursor(0,0); lcd.print(text1);
    Serial.println(text1);

  }

  delay(5);
  radio.stopListening();

  int tx= random(10,1000);

  String txt="Hello Sheron";
  char ttmp[15];
  txt.toCharArray(ttmp,txt.length());

  char text[32]; 
  sprintf(text,"%d is %s", tx, ttmp); 
  
  radio.write(&text, sizeof(text));

}