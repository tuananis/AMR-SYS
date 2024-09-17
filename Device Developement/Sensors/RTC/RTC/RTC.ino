#include <RTClib.h>

RTC_DS3231 rtc;

//Set the day of week
char daysOfWeek[7][12] = {
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
};

void setup () {
  Serial.begin(9600);

  // SETUP RTC MODULE
  if (! rtc.begin()) {
    Serial.println("RTC module is NOT found");
    Serial.flush();
    while (1);
  }

  // First time execution to set the system date of the RTC computer system date
  rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));

  // First time execution to set manual date of the RTC to given date
   //rtc.adjust(DateTime(2024, 9, 13, 15, 56, 0));
}

void loop () {
  DateTime now = rtc.now();

  String strDate = String(now.year(),DEC) + "-" + String(now.month(), DEC) + "-" + String(now.day(), DEC);
  Serial.println("Current Date:" + strDate);

  String strTime=String(now.hour(), DEC) + ":" + String(now.minute(), DEC) + ":" + String(now.second(), DEC);
  Serial.println("Current Time:" + strTime);

  String strDofW= daysOfWeek[now.dayOfTheWeek()];
  Serial.println("Date of Week:" + strDofW);

  delay(1000); // delay 1 seconds
}