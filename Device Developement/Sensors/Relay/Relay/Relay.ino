// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(41, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(41, HIGH);  // turn the Relay on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(41, LOW);   // turn the Relay off by making the voltage LOW
  delay(1000);                      // wait for a second
}
