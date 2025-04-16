#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <Servo.h>

#define button 4

RF24 radio(7, 8); // CE, CSN
const byte addresses[][6] = {"00001", "00002"};
Servo myServo;
boolean buttonState = 0;

// Max size of this struct is 32 bytes - NRF24L01 buffer limit
struct Data_Package {
  byte a = 0;
  byte b = 125;
  byte c = 255;
  int d = 1024;
  float e = 3.141592;
  String f = "Test";
};

Data_Package data; //Create a variable with the above structure

void setup() {
  pinMode(button, INPUT);
  myServo.attach(5);
  Serial.begin(9600);

  radio.begin();
  radio.openWritingPipe(addresses[0]); // 00001
  radio.openReadingPipe(1, addresses[1]); // 00002
  radio.setPALevel(RF24_PA_MIN);
}

void loop() {
  delay(5);
  radio.startListening();
  // if (radio.available()) {
  //     radio.read(&data, sizeof(Data_Package)); // Read the whole data and store it into the 'data' structure
  //   }
  //   Serial.println(data.f);




  if ( radio.available()) {
    while (radio.available()) {
      int angleV = 0;
      radio.read(&data, sizeof(Data_Package));
      //myServo.write(angleV);
    }
    Serial.println(data.f.);
  }


  //   delay(5);
    // radio.stopListening();
    // buttonState = digitalRead(button);
    // radio.write(&buttonState, sizeof(buttonState));
}