## AutoRCM

!!! tip "What is AutoRCM?"
	AutoRCM causes the console to believe it is bricked, and will automatically launch RCM upon boot for recovery purposes, without needing a jig. As RCM is a recovery mode from repair specialists, this is an intended feature from the device developer, though is also considered a softbrick. If you aren't careful, misuse of AutoRCM can lead to real **damage**, especially with units that cannot inject custom RCM payloads (like Mariko hardware). Please take care when using it. Please keep in mind that the console can no longer boot on its own, so you'll need a PC, phone, or other payload injector to start the console after a coldboot.

	Note: If the console screen stays black when pressing the power button after activating AutoRCM, remember that it's not broken. It's in RCM.

!!! warning "If you don't have a BOOT0/1 backup yet..."
	You really want to kill your console, huh? If you haven't made a BOOT0/1 backup yet, it is recommended to make one **right now**.

	1. Boot Hekate
	2. Go to `Tools`, and select `Backup eMMC`
	3. Then tap `eMMC BOOT0 & BOOT1` and let the process complete.

!!! danger "Disadvantages of AutoRCM"
	There are some disadvantages you should consider before installing AutoRCM:

	- Please keep in mind that the console can no longer boot on its own, so you'll need a PC, phone, or other payload injector to start the console after letting the console fully shut off. (AutoRCM by itself is considered a "tethered jailbreak").
		Note: Sleep Mode is not considered "powering off/on" the console. Sleep Mode will still work as intended and is fully unchanged with AutoRCM.
	- When completely discharged, your Switch will take a very long time to charge while in RCM. To solve this, charge the console for approximately twenty minutes before booting into Hekate and selecting a boot option. After it's done booting, the console will now charge at a normal speed with a battery icon in the corner.

!!! tip "Advantages of AutoRCM"
	AutoRCM can be used for good as well:

	- If you were having trouble getting into RCM before (i.e you were using the tinfoil method), now you can get into RCM without any hassle.
	- If you want to keep fuses unburned, you can do so with AutoRCM, as the Switch never gets the chance to burn them. Nintendo's bootloaders burn the fuses, but those bootloaders cannot be used if AutoRCM is enabled.
		Note: updating the console while booted into Hekate's "stock" configuration will clear AutoRCM on the next reboot. Please update while using custom firmware, or be sure to use a jig after the console reboots.
	- It's easier to inject a payload using a payload injector, as using your jig and booting into RCM manually is no longer required.

!!! tip "Other information..."
	- This method corrupts a single byte in both your BOOT0 and your BOOT1 partitions. This is why a backup of those is recommended.
  - This software version of AutoRCM can almost always be reversed, so don't freak out if it doesn't work out the way you'd like it to.

If, despite all of the warnings above, you still wish to install AutoRCM, and understand the risks, do the following:

1. Boot Hekate
2. Go to `Tools`
3. At the bottom of the page, tap `Archive bit - AutoRCM`
4. Then tap `AutoRCM`. It will show a little `ON` next to the option once you have done this.
