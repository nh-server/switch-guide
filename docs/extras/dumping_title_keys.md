# Dumping Title Keys
This section is for dumping your games' title keys.

&nbsp;

!!! danger "Advanced users only!"
	Title keys are meant for decrypting game dumps, usually for modding purposes. Most users won't need this.

&nbsp;

### What you need

!!! tip ""
	- The latest release of [Lockpick_RCM](https://github.com/shchmue/Lockpick_RCM) in your `/bootloader/payloads` folder

### Instructions

!!! tip ""
    1. Enter RCM and inject the Hekate payload.
    2. Tap the `Payloads` option, then press Lockpick_RCM.bin.
    3. If Lockpick_RCM asks you to select between SysNAND or emuMMC, choose SysNAND by navigating with the volume buttons and pressing the power button. If not, continue with step 4.
    4. If Lockpick_RCM prompts you to `Reboot to Sept`, press power or either volume button to do so. A "sept by Atmosphere" logo will then display, followed by Lockpick_RCM starting again. If it does *not* prompt you, continue on to step 5.
    5. Lockpick_RCM should now inform you that your keys have been saved to `/switch/prod.keys` on the SD card.	1. Copy `Lockpick.nro` to the `switch` folder on your SD card
	2. Place your SD card back into your Switch
	3. Launch Atmosphere CFW
	4. Go to the homebrew menu, and launch the Lockpick app. Once it finishes dumping, press + to exit
	5. You should now have your title.keys file in the `switch` folder on your SD card