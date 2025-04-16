#include <esp_now.h>
#include <WiFi.h>

// REPLACE WITH THE MAC Address of your receiver 

//Dev1
//uint8_t broadcastAddress[] = {0xcc, 0x50, 0xe3, 0x95, 0x97, 0x40};

//Dev2
uint8_t broadcastAddress[] = {0x24, 0x62, 0xab, 0xca, 0xe0, 0xd4};

// Define variables to store incoming readings
int meterStatus;
float meterValue

// Variable to store if sending data was successful
String success;

//Structure example to send data
//Must match the receiver structure
typedef struct struct_message {
    int mStatus;
    float mValue;
} struct_message;

// Create a struct_message called BME280Readings to hold sensor readings
struct_message deviceData;

// Create a struct_message to hold incoming sensor readings
struct_message receiveData;

esp_now_peer_info_t peerInfo;

// Callback when data is sent
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nLast Packet Send Status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
  if (status ==0){
    success = "Delivery Success :)";
  }
  else{
    success = "Delivery Fail :(";
  }
}

// Callback when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&incomingReadings, receiveData, sizeof(incomingReadings));
  Serial.print("Bytes received: ");
  Serial.println(len);
  meterStatus = receiveData.mStatus;
  meterValue = receiveData.mValue;
}
 
void setup() {
  // Init Serial Monitor
  Serial.begin(115200);

  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }

  // Once ESPNow is successfully Init, we will register for Send CB to
  // get the status of Trasnmitted packet
  esp_now_register_send_cb(OnDataSent);
  
  // Register peer
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = 0;  
  peerInfo.encrypt = false;
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  }
  // Register for a callback function that will be called when data is received
  esp_now_register_recv_cb(esp_now_recv_cb_t(OnDataRecv));
}
 
void loop() {
   
  // Set values to send
  BME280Readings.temp = 1.2;
  BME280Readings.hum = 3.0;
  BME280Readings.pres = 1.4;

  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &deviceData, sizeof(BME280Readings));
   
  if (result == ESP_OK) {
    Serial.println("Sent with success");
  }
  else {
    Serial.println("Error sending the data");
  }
  delay(10000);
}
