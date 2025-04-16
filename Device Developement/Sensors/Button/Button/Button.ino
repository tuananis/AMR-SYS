#include <ezButton.h>

#define KEY_NUM 4  // the number of keys

#define PIN_KEY_1 43  // GPIO26 connected to the key 1
#define PIN_KEY_2 45  // GPIO25 connected to the key 2
#define PIN_KEY_3 47  // GPIO14 connected to the key 3
#define PIN_KEY_4 49  // GPIO27 connected to the key 4

ezButton keypad_1x4[] = {
  ezButton(PIN_KEY_1),
  ezButton(PIN_KEY_2),
  ezButton(PIN_KEY_3),
  ezButton(PIN_KEY_4)
};

void setup() {
  Serial.begin(9600);

  for (byte i = 0; i < KEY_NUM; i++) {
    keypad_1x4[i].setDebounceTime(100);  // set debounce time to 100 milliseconds
  }
}

void loop() {
  //Identified the key pressed
  int key = getKeyPressed();
  if (key) {
    Serial.print("The key ");
    Serial.print(key);
    Serial.println(" is pressed");
  }
}

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
