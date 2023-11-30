const int photoPIN = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int photoValue = analogRead(photoPIN);
  Serial.println(photoValue);

  delay(100); // Adjust delay as needed
}


