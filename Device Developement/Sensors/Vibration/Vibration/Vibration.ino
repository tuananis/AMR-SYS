void setup() {
  // initialize serial communication at 115200 bits per second:
  Serial.begin(115200);
}

void loop() {
  // read the analog / millivolts value for pin 2:
  int analogValue = digitalRead(40);
  Serial.println(analogValue);

  // if (analogValue>=300)
  // {
  //   Serial.println("Tamper Detected");
  // }
  // else
  // {
  //   //Serial.println("No Tamper Detected");
  // }

  delay(100);  // delay in between reads for clear read from serial
}
