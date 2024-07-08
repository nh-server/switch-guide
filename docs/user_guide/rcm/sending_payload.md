

# Sending a Payload

!!! warning "If you are here to test if your Switch is patched"
    Make sure you have [put your device into RCM](entering_rcm.md) and downloaded Hekate. Once finished, if your console is **not** patched, continue with the "Preparing Hekate" section at the bottom of the page.


Now that the device is in RCM, we will need to send it a payload. The methods are mostly the same but slightly differ depending on what hardware you have available.

&nbsp;

=== "Windows"

    #### **What you need:**

    - The latest release of <a href="https://github.com/eliboa/TegraRcmGUI/releases" target="_blank">TegraRcmGUI</a> (either the MSI or zip)
    - A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (`hekate_ctcaer_(version).bin`) is located inside of the `hekate_ctcaer_(version).zip`.

    #### **Instructions:**

    1. Install and run TegraRcmGUI.
    2. Navigate to the `Settings` tab, then press `Install Driver` and follow the on-screen instructions.
        - If you face issues when installing the driver, follow the [driver installation with Zadig](#driver-installation-with-zadig) section below.
    3. Connect your Switch in RCM to your PC using the USB cable.
    4. Navigate to the `Payload` tab of TegraRcmGUI.
        - Your Switch should be shown as detected in the bottom left corner.
    5. Press the file button next to `Inject payload`, and navigate to and select the `hekate_ctcaer_X.X.X.bin` file.
    6. Click `Inject payload` to launch the payload you selected.
        - If your payload was successfully injected your switch should have yellow text that says "Nyx is missing", this will be resolved soon.
    #### **Driver installation with Zadig**

    Follow these steps if you face issues when installing the driver with TegraRcmGUI. You will need the latest version of <a href="https://zadig.akeo.ie" target="_blank">Zadig</a>.

    1. Launch Zadig. In the `Options` menu, be sure that `List All Devices` is enabled.
    2. Connect your Switch in RCM to your PC using the USB cable.
    3. In Zadig, select "APX" in the device list.
    4. Select `libusbK (v3.1.0.0)` in the driver list.
    5. Click `Install Driver` and wait for the installation to finish.

=== "Linux"

    #### **What you need:**

    - The latest release of [fusee-nano](https://github.com/DefenderOfHyrule/fusee-nano/releases) (also available on the [AUR](https://aur.archlinux.org/packages/fusee-nano))
         - If you use Arch Linux or a derivative distro, the AUR package is recommended.
    - A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (`hekate_ctcaer_(version).bin`) is located inside of the `hekate_ctcaer_(version).zip`.

    #### **Instructions:**

    1. Download and run the payload injector from your terminal. You will need to run the injector as root, unless you follow the instructions at [Linux injection without root](../../extras/adding_udev.md).
    2. Connect your Switch in RCM to your PC using the USB cable.
    3. Run fusee-nano with: `./fusee-nano /path/to/hekate-ctcaer_X.X.X.bin`
        - As mentioned earlier, unless you have followed the instructions at [Linux injection without root](../../extras/adding_udev.md), this will require root to run. For most systems, this is done with `sudo`
        - If your payload was successfully injected your switch should have yellow text that says "Nyx is missing", this will be resolved soon.

=== "Mac"

    #### **What you need:**

    - The latest release of [CrystalRCM](https://github.com/prayerie/CrystalRCM/releases) (the `CrystalRCM.(version).dmg` file)
    - A USB-A to USB-C cable (or a standard USB-C cable if your computer natively supports USB-C)
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (`hekate_ctcaer_(version).bin`) is located inside of the `hekate_ctcaer_(version).zip`.

    #### **Instructions:**

    1. Download the latest release of CrystalRCM.
    2. Connect your Switch in RCM to your PC using the USB cable, make sure it's also detected in CrystalRCM.
    2. Mount the `CrystalRCM.(version).dmg` file, open the mounted disk image in File Explorer and copy the `CrystalRCM.app` file inside of the mounted disk image to any location on your Mac.
    3. Open the `CrystalRCM.app` app, then click `Payload...` and select the `hekate_ctcaer_X.X.X.bin` file.
    4. Once selected, click `Push!`. The payload should now be injected successfully.
        - If your payload was successfully injected your switch should have yellow text that says "Nyx is missing", this will be resolved soon.
=== "Android"

    #### **What you need:**

    - The latest release of <a href="https://github.com/MenosGrante/Rekado/releases" target="_blank">Rekado</a>
    - You will need to enable Unknown Sources in your device settings to install this
    - A USB-C cable
    - If your device has a USB-C port, you may use a C-C cable
    - If your device only has a Micro USB port, you will need a USB OTG adapter and a USB A-C cable
    - This **will not work** on every phone!
    - The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a>. The Hekate payload (`hekate_ctcaer_(version).bin`) is located inside of the `hekate_ctcaer_(version).zip`.

    #### **Instructions:**

    1. Copy the hekate_ctcaer `.bin` file from the Hekate `.zip` file to a location on your phone.
        - A tool such as Amaze File Manager can do this.
    2. Launch Rekado on your phone.
    3. Navigate to `Payloads` (Signified by a downwards arrow with a line), then press the `+` button at the bottom right.
    4. Navigate to your hekate_ctcaer `.bin` file and tap it to add it to Rekado's menu.
    5. **Optional, but recommended**: Navigate to Rekado's settings in the top right and enable `Hide bundled`.
    6. Connect your Switch in RCM to your phone using the USB cable.
    7. If prompted, grant Rekado access to the Switch.
    8. Select the `hekate_ctcaer_X.X.X.bin` file in the dialog that pops up.
        - If your payload was successfully injected your switch should have yellow text that says "Nyx is missing", this will be resolved soon.
=== "Chromebook"

    #### **What you need:**

    - A USB-A to USB-C cable
    !!! warning "About USB-C"
        If your Chromebook has a USB-C port, do note that this will not work using a C-C cable.


    #### **Instructions:**

    1. Go to the injection [website](https://fusee.eiphax.tech/) and scroll all the way down
    2. Open the dropdown menu and select `hekate_ctcaer_X_X_X` from the list.
    3. Connect your Switch in RCM to your Chromebook using the USB cable.
    4. Select "Deliver Payload". A pop-up will appear. Click the `APX` option.
    5. Press the Connect button and the payload will be injected.
        - If your payload was successfully injected your switch should have yellow text that says "Nyx is missing", this will be resolved soon.

!!! danger "If nothing happens after you send the payload"
    If your console's screen remains black after you've sent Hekate (or any other payload), it's possible your payload was corrupted, or that your console is patched. If your payload injector program shows that zero or 0x0000 bytes were sent, then it is patched. This isn't a one-time glitch or up for debate; it is patched. Consider an alternate method that isn't via RCM.

-----

### **Preparing Hekate**
We will prepare the microSD card for formatting/partitioning before going to the next page. Removing the microSD card while in Hekate is safe so turning off the console is not necessary and keeping it on will save time that would be spent reinjecting the payload.

!!! danger "Following the guide will delete everything on your microSD card!"
    Later in the guide, you will be formatting and/or partitioning your microSD card. This means that all data on the microSD card will be lost. Now is a good time to back up *all* of its data to a safe place (for example, on your PC or external drive) so that you can restore it later. You can do this by following the instructions below.

-----

#### **What you need:**
- The latest release of <a href="https://github.com/CTCaer/hekate/releases/" target ="_blank">Hekate</a>.
- Your microSD card

#### **Instructions:**
1. Without turning your Switch off, remove the microSD card from the Switch.
2. Insert your microSD card into your computer.
3. Copy the `Nintendo` folder (and any other important data) from the root of your microSD card to a safe space on your device.
4. Extract the Hekate `.zip` to a location on your computer
5. Inside the extracted Hekate folder you will find a folder named `bootloader`.
6. Copy the `bootloader` folder to the root of your microSD card.
7. Put your microSD card back into your Switch.
8. Press any button to continue to the Hekate menu.
9. Use volume up and volume down to navigate the Hekate menu. Hover over 'reload' and press the power button to select. Your screen should now have the Hekate GUI (Nyx) pictured below.
![Nyx](../all/img/nyx.bmp){ width="600" }

[Continue to choosing your CFW environment :material-arrow-right:](../all/cfw_environment.md){ .md-button .md-button--primary }
