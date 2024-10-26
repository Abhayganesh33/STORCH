# ESP32 Safety Torch Project

## Overview

This project demonstrates a simple web interface for controlling a safety torch device using an ESP32. The provided code serves as a frontend prototype to illustrate the planned functionality.

## Important Notes

- **Frontend Prototype**: The HTML, CSS, and JavaScript files included in this repository are designed to showcase the user interface for the safety torch. 
- **Main Code**: The actual functionality of the device relies on the `uno.ino` code, which must be uploaded to the ESP32. This code handles the backend operations and connects to the web interface.
- **Wi-Fi Connectivity**: For practical reasons related to time constraints, I have switched from Bluetooth connectivity to Wi-Fi. The ESP32 will generate an IP address once powered on and connected to the network.

## Usage Instructions

1. Upload the `uno.ino` code to your ESP32 using the Arduino IDE.
2. Power on the ESP32 and ensure it is connected to your Wi-Fi network.
3. Open the Serial Monitor in the Arduino IDE to find the generated IP address.
4. Enter the generated IP address into your web browser to access the working web interface.

## Modification

This prototype is designed to be simple and can be modified to fit additional features or functionalities as desired. Feel free to explore and enhance the code!

## License

This project is open-source and available for public use and modification. Please refer to the license file for more details.
![image_2024-10-26_07-15-20](https://github.com/user-attachments/assets/b282acef-0ac5-4cfe-984e-8da32643e399)
