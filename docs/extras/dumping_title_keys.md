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
    5. Lockpick_RCM should now inform you that your title keys have been saved to `/switch/title.keys` on the SD card.
