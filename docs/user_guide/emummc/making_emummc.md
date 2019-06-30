# Making the Emummc and getting keys

&nbsp;

### Making the emuMMC

!!!warning "Before you start"
    Before you start, boot your switch normally, and delete all the wifi networks. You can add them back to your sysnand after completing this guide

!!!tip ""
    1. Enter RCM and inject the Hekate payload
    2. Navigate to `emuMMC` using the touch screen
    3. Select `Create emuMMC`, then select `SD Partition`
    4. Select `Continue`. It will start making the emummc now. After it's done return to the emuMMC menu
    5. Select `Change emuMMC`, then `SD RAW 1`
    6. Go back to the main menu

-----

&nbsp;

### Getting your Console's Unique Keys

!!! danger "Important"
    These keys are critical to have. In an extreme emergency, they can be used in conjunction with your NAND backup and other tools to restore your console to a working state.

!!!tip ""
    1. While still in hekate, press the `Payloads` option, then press Lockpick_RCM.bin
    2. If Lockpick_RCM prompts you to `Reboot to Sept`, press power or either volume button to do so. A "sept by Atmosphere" logo will then display, followed by Lockpick_RCM starting again. If it does *not* prompt you, continue on to step 3.
    3. Lockpick_RCM should now inform you that your keys have been saved to `/switch/prod.keys` on the SD card.
    4. Press the power button to power off your Switch
    5. Insert your SD card into your PC
    6. Copy `prod.keys` from the `switch` folder on your SD card to a safe location on your PC (it is suggested to copy it to the same place that you copied your NAND backup to).
    

&nbsp;

#### [Continue to Launching CFW <i class="fa fa-arrow-circle-right fa-lg"></i>](launching_cfw.md)
