# Dumping Title Keys
This section is for dumping your games' title keys.

&nbsp;

!!! danger "Advanced users only!"
	Title keys are meant for decrypting game dumps, usually for modding purposes. Most users won't need this.

&nbsp;

### What you need

!!! tip ""
	- The latest release of [Lockpick](https://github.com/shchmue/Lockpick/releases)
	- The latest release of [Hekate](https://github.com/CTCaer/hekate/releases)

### Instructions

!!! tip ""
	1. Copy `Lockpick.nro` to the `switch` folder on your SD card.
	2. Place your SD card back into your Switch.
	3. Inject the Hekate payload to your Switch via your favorite payload injector.
	4. In Hekate, navigate to `Console info` -> `Print fuse info`. Press the power button to dump the fuse info. Press the volume button after it says `done` to go back.
	5. Navigate to `Print TSEC keys`. Press the power button to dump the TSEC keys. Press the volume button after it says `done` to go back.
	6. Launch Atmosphere CFW
	7. Go to the homebrew menu, and launch the Lockpick app. Once it finishes dumping, press + to exit
	8. You should now have your prod.keys in the `switch` folder on the sd card

!!! tip "Lockpick"
	![ExampleSwitchTheme](../extras/img/backup_keys.jpg)