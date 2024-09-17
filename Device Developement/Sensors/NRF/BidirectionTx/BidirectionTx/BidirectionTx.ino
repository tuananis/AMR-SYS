#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>


RF24 radio(7, 8); // CE, CSN
const byte addresses[][6] = {"00001", "00002"};

// Max size of this struct is 32 bytes - NRF24L01 buffer limit
struct Data_Package {
  byte a = 1;
  byte b = 2;
  byte c = 3;
  int d = 4;
  float e = 5.1;
  String f = "Anis";
};

Data_Package data; 

void setup() {
  Serial.begin(9600);

  radio.begin();
  radio.openWritingPipe(addresses[1]); // 00002
  radio.openReadingPipe(1, addresses[0]); // 00001
  radio.setPALevel(RF24_PA_MIN);
}

void loop() {
  delay(5);
  radio.stopListening();
  Serial.println(data.f);
  radio.write(&data, sizeof(Data_Package));

  // delay(5);
  // radio.startListening();
  // while (!radio.available());
  // radio.read(&buttonState, sizeof(buttonState));
  
}