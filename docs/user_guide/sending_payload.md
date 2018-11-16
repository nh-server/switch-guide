# Sending a Payload

Now that the device is in RCM, we will need to send it a payload. The methods are mostly the same, but slightly differs depending on what hardware you have available.

## Windows

### What you need

- The latest release of [TegraRcmGUI](https://github.com/eliboa/TegraRcmGUI/releases) (either the MSI or zip)
- The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
- A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)

### Instructions

1. Install TegraRcmGUI, and run it. Go to the settings tab and press "Install Driver" and follow the on-screen prompts to install the APX driver.
2. Connect your Switch in RCM to your PC using the USB cable and go to the payload tab of TegraRcmGUI 
	- It should show that your Switch is detected in the bottom left corner
3. Select the Hekate `.bin` file by pressing the file button next to the "Inject payload" button in the payload tab
4. Click "Inject payload" to launch Hekate


## Mac / Linux

### What you need

- The latest release of [rocontrol](https://github.com/moriczgergo/rocontrol)
- The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
- A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)

### Instructions

1. Copy the nh-rcm-gui executable to a location on your computer
2. Copy the hekate_ctcaer `.bin` file from the Hekate `.zip` file to the same location as the nh-rcm-gui executable
3. Connect your Switch in RCM to your PC using the USB cable
    - On Linux, if you are using a USB-A to USB-C cable, you will need to connect the system to a USB 3.0 port
4. Run nh-rcm-gui
5. Under `Payload Injection`, press `Select`
6. In the new window, navigate to your Hekate `.bin` file, and press `Open`
7. Press `Send Payload` to run the payload on your Switch

## Android

- The latest release of [Rekado](https://github.com/MenosGrante/Rekado/releases)
    - You will need to enable Unknown Sources in your device settings to install this
- The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
- A USB-C cable
    - If your device has a USB-C port, you may use a C-C cable
    - If your device only has a Micro USB port, you will need a USB OTG adapter and a USB A-C cable
        - This **will not work** on every phone!
1. Copy the hekate_ctcaer `.bin` file from the Hekate `.zip` file to a location on your phone
    - A tool such as Amaze File Manager can do this
2. Launch Rekado on your phone
3. Navigate to `Payloads`, then press the `+` button at the bottom right
4. Navigate to your hekate_ctcaer `.bin` file, and tap it to add it to Rekado's menu
5. **Optional, but recommended**: Navigate to Rekado's settings and enable `Hide bundled`
6. Connect your Switch in RCM to your phone using the USB cable
7. If prompted, grant Rekado access to the Switch
8. Select your hekate_ctcaer `.bin` file in the dialog that pops up

[Continue to Making a NAND Backup](making_a_nand_backup.md)