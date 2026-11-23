#include <Arduino.h>

// Define RGB pins
const int redPin = 25;
const int greenPin = 26;
const int bluePin = 27;

void setColor(int red, int green, int blue) {
  ledcWrite(0, red);
  ledcWrite(1, green);
  ledcWrite(2, blue);
}

void setup() {
  Serial.begin(9600);

  // Set up PWM (8-bit, 5kHz)
  ledcSetup(0, 5000, 8);
  ledcSetup(1, 5000, 8);
  ledcSetup(2, 5000, 8);

  // Attach channels to pins
  ledcAttachPin(redPin, 0);
  ledcAttachPin(greenPin, 1);
  ledcAttachPin(bluePin, 2);

  setColor(0, 0, 0); // Start with LED off
}

void loop() {
  if (Serial.available()) {
    char c = Serial.read();

    if (c == 'R') {
      setColor(255, 0, 0);  // Red
    } else if (c == 'G') {
      setColor(0, 255, 0);  // Green
    } else if (c == 'B') {
      setColor(0, 0, 255);  // Blue
    } else if (c == 'X') {
      setColor(0, 0, 0);    // All off
    }
  }
}

