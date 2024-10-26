# STORCH - Women Safety Device

## Overview

STORCH is a women's safety device primarily focused on solo traveling women. When faced with a threat, the user can activate the device, which focuses a high-intensity light and emits a loud sound to temporarily blind and disorient the threat. This provides the user an opportunity to escape. As soon as the device is turned on, it connects to the web and sends an SOS alert to a designated help contact, along with the user's current location details.

## Important Notes

- **Frontend Prototype**: The HTML, CSS, and JavaScript files included in this repository are designed to showcase the user interface for the STORCH device.
- **Main Code**: The actual functionality of the device relies on the `uno.ino` code, which must be uploaded to the ESP32. This code handles the backend operations and connects to the web interface.
- **Wi-Fi Connectivity**: Due to time constraints, I switched from Bluetooth connectivity to Wi-Fi. The ESP32 generates an IP address once powered on and connected to the network.

## Media

https://github.com/user-attachments/assets/5f5e02cd-fcf5-459e-8bda-27a88694f911

https://github.com/user-attachments/assets/342723a1-2b73-4bb3-8512-81e9ecdde660

https://github.com/user-attachments/assets/5713e1df-95f8-4c07-acf7-cf6be9425f4a

![4](https://github.com/user-attachments/assets/4ad00250-888e-49a8-a2d1-a677feab46bd)

![5](https://github.com/user-attachments/assets/0884c60e-7a00-4846-b4e9-3cc0abf78ffa)

![6](https://github.com/user-attachments/assets/a0f19c93-9f35-4a8b-a31d-32db3ba70fd5)

## Hardware Components


- **ESP32**: Microcontroller with Wi-Fi capabilities.
- **12V 10W LED**: High-intensity light source.
- **High-Frequency Buzzer**: Emits a loud sound for distraction.
- **IRFZ44N N-Channel MOSFET**: Used to control the power to the LED and buzzer.
- **Button**: Used to activate the device.
- **1A 12V Battery**: Power supply for the device.

## Working

When the button is pressed, the ESP32 activates the MOSFET to turn on the 12V LED and the buzzer. The high-intensity light and sound serve to distract potential threats, giving the user time to escape. The ESP32 also sends an SOS alert with the user's unique ID and current location to a pre-defined help contact.

## Software Part

The ESP32 acts as a web server that connects to Wi-Fi, allowing a web page to display the current status based on a connected switch. When the switch is pressed, the ESP32 updates the current state and responds to HTTP requests from the web page.

While I originally intended to use Bluetooth for connecting with the web interface, I switched to Wi-Fi due to time constraints. This solution, while faster to implement, has limitations in efficiency compared to Bluetooth.

## Usage Instructions

1. Upload the `uno.ino` code to your ESP32 using the Arduino IDE.
2. Power on the ESP32 and ensure it is connected to your Wi-Fi network.
3. Open the Serial Monitor in the Arduino IDE to find the generated IP address.
4. Enter the generated IP address into your web browser to access the working web interface.

## Modification

This prototype is designed to be simple and can be modified to fit additional features or functionalities as desired. Feel free to explore and enhance the code!

## License

This project is open-source and available for public use and modification. Please refer to the license file for more details.
