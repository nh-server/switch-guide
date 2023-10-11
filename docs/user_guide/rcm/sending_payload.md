

# Sending a Payload

!!! warning "If you are here to test if your Switch is patched"
    Make sure you have [put your device into RCM](entering_rcm.md) and downloaded Hekate. Once finished, if your console is **not** patched, continue with the "Preparing Hekate" section at the bottom of the page.


Now that the device is in RCM, we will need to send it a payload. The methods are mostly the same but slightly differ depending on what hardware you have available.

&nbsp;

=== "Windows"

    #### What you need

    - The latest release of <a href="https://github.com/eliboa/TegraRcmGUI/releases" target="_blank">TegraRcmGUI</a> (either the MSI or zip)
    - A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (hekate_ctcaer bin) is located in the hekate_ctcaer zip.

    #### Instructions

    1. Install and run TegraRcmGUI.
    2. Navigate to the `Settings` tab, then press `Install Driver` and follow the on-screen instructions.
        - If you face issues when installing the driver, follow the [driver installation with Zadig](#driver-installation-with-zadig) section below.
    3. Connect your Switch in RCM to your PC using the USB cable.
    4. Navigate to the `Payload` tab of TegraRcmGUI.
        - Your Switch should be shown as detected in the bottom left corner.
    5. Press the file button next to `Inject payload`, and navigate to and select the `hekate_ctcaer_X.X.X.bin` file.
    6. Click `Inject payload` to launch the payload you selected.

    #### Driver installation with Zadig

    Follow these steps if you face issues when installing the driver with TegraRcmGUI. You will need the latest version of <a href="https://zadig.akeo.ie" target="_blank">Zadig</a>.

    1. Launch Zadig. In the `Options` menu, be sure that `List All Devices` is enabled.
    2. Connect your Switch in RCM to your PC using the USB cable.
    3. In Zadig, select "APX" in the device list.
    4. Select `libusbK (v3.1.0.0)` in the driver list.
    5. Click `Install Driver` and wait for the installation to finish.

=== "Mac / Linux"

    #### What you need

    - The latest release of <a href="https://github.com/nh-server/fusee-interfacee-tk/releases" target="_blank">fusee-interfacee-tk</a>
    - A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (hekate_ctcaer bin) is located in the hekate_ctcaer zip.

    #### Instructions

    1. Download and run the payload injector (if you're on Linux, you will need to run this program as root, use `sudo`, or follow the instructions at [Linux injection without root](../../extras/adding_udev.md)).
    2. Connect your Switch in RCM to your PC using the USB cable.
    3. Wait for your Switch to be shown as found in the injector.
    4. Press `Select Payload`, and navigate to and select the `hekate_ctcaer_X.X.X.bin` file.
    5. Click `Send Payload!` to launch the payload you selected.


=== "Android"

    #### What you need

    - The latest release of <a href="https://github.com/MenosGrante/Rekado/releases" target="_blank">Rekado</a>
    - You will need to enable Unknown Sources in your device settings to install this
    - A USB-C cable
    - If your device has a USB-C port, you may use a C-C cable
    - If your device only has a Micro USB port, you will need a USB OTG adapter and a USB A-C cable
    - This **will not work** on every phone!
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (hekate_ctcaer bin) is located in the   hekate_ctcaer zip.

    #### Instructions

    1. Copy the hekate_ctcaer `.bin` file from the Hekate `.zip` file to a location on your phone.
        - A tool such as Amaze File Manager can do this.
    2. Launch Rekado on your phone.
    3. Navigate to `Payloads`, then press the `+` button at the bottom right.
    4. Navigate to your hekate_ctcaer `.bin` file and tap it to add it to Rekado's menu.
    5. **Optional, but recommended**: Navigate to Rekado's settings and enable `Hide bundled`.
    6. Connect your Switch in RCM to your phone using the USB cable.
    7. If prompted, grant Rekado access to the Switch.
    8. Select the `hekate_ctcaer_X.X.X.bin` file in the dialog that pops up.

=== "Chromebook"

    #### What you need

    - A USB-A to USB-C cable
    !!! warning "About USB-C"
        If your Chromebook has a USB-C port, do note that this will not work using a C-C cable.
       
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (hekate_ctcaer bin) is located in the hekate_ctcaer zip.

    #### Instructions

    1. Go to the injection [website](https://switchgui.de/web-payload/) and scroll all the way down
    2. Select the "Upload Payload" option and upload the `hekate_ctcaer_X.X.X.bin` file from the Hekate `.zip` file.
    3. Connect your Switch in RCM to your Chromebook using the USB cable.
    4. Select "Do the thing". A pop-up will appear. Click the `APX` option.
    5. Press the Connect button and the payload will be injected.

=== "iOS"
    #### What you need

    - The latest release of <a href="https://github.com/mologie/nxboot/releases/" target="_blank">NXBoot</a>.
    - A Jailbroken device on iOS 11.0 or higher
        - This also requires the proper sandbox patches from the jailbreak such as unc0ver
    - An OTG Lighting to USB Adapter
    !!! warning "Unofficial Lightning Adapters"
        Unofficial OTG Lighting adapters have variance in whether or not they work so an official one would be preferred.
        
    - A USB 3 Type A to Type C cable
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (hekate_ctcaer bin) is located in the hekate_ctcaer zip.

    #### Instructions

    1. Install and run NXBoot on your jailbroken device.
    2. Connect your Switch to your iPhone using the OTG Lightning Adapter and USB cable.
    3. Under select boot code change the inject payload to the `hekate_ctcaer_X.X.X.bin` file.
    4. Click `Boot Now` to launch the payload you selected.

!!! danger "If nothing happens after you send the payload"
    If your console's screen remains black after you've sent Hekate (or any other payload), it's possible your payload was corrupted, or that your console is patched.   If your payload injector program shows         that 0 bytes were sent, then it is definitely patched, so you'll be unable to proceed with the rest of the guide.

## Preparing Hekate
We will prepare the MicroSD card for partitioning before going to the next page. Removing the SD card while in Hekate is safe so turning off the console is not necessary and keeping it on will save time that would be spent reinjecting the payload.

#### What You Need
- The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target ="_blank">Hekate</a>.
- Your MicroSD card

#### Instructions
1. Without turning your Switch off, remove the MicroSD card from it.
2. Insert your Switch's MicroSD card into your PC.
3. Inside the extracted Hekate folder you will find a folder named `bootloader`.
4. Copy the `bootloader` folder to the root of your MicroSD card.
5. Copy the Nintendo folder from the root of your MicroSD card to a safe space on your computer.
6. Once the Nintendo folder is done copying eject your MicroSD from inside your OS.
7. Put your MicroSD card back into your Switch.
8. Use volume up and volume down to navigate the Hekate menu. Hover over 'reload' and hit power. Your screen should now have the Hekate GUI.

[Continue to Partitioning the SD :material-arrow-right:](../all/partitioning_sd.md){ .md-button .md-button--primary }
