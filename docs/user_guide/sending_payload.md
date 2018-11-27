

# Sending a Payload

Now that the device is in RCM, we will need to send it a payload. The methods are mostly the same, but slightly differs depending on what hardware you have available.

&nbsp;

## Windows

### What you need

- The latest release of [TegraRcmGUI](https://github.com/eliboa/TegraRcmGUI/releases) (either the MSI or zip)
- The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
- A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)

### Instructions

1. Install and run TegraRCMGUI
2. Navigate to the `Settings` tab, then press `Install Driver` and follow the on-screen instructions
3. Connect your Switch in RCM to your PC using the USB cable
4. Navigate to the `Payload` tab of TegraRcmGUI 
    - Your Switch should be shown as detected in the bottom left corner
5. Press the file button next to `Inject payload`, and navigate to and select your hekate_ctcaer `.bin` file
6. Click `Inject payload` to launch Hekate

&nbsp;

## Mac / Linux

#### TODO

&nbsp;

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

&nbsp;

#### [Continue to Making a NAND Backup](making_a_nand_backup.md)