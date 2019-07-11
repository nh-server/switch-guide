## AutoRCM

!!! tip "What is AutoRCM?"
	AutoRCM is a controlled brick, bricking a part of the boot0/1 to make the console believe it's bricked and boot straight to RCM (recovery mode). This means that if you're not careful around AutoRCM, you can end up **damaging** your console. Please take care when using AutoRCM.

	Note: Before you freak out if the switch's screen stays black when you power on your switch after activating AutoRCM, it's not bricked. it's in RCM.


!!! warning "If you don't have a boot0/1 backup yet..."
	You really want to kill your console huh? If you haven't made a boot0/1 backup yet, it is recommended to make one **right now**.

	1. Boot Hekate
	2. Go to `Tools`, and select `Backup eMMC`
	3. Then tap `eMMC BOOT0 & BOOT1` and let the process complete.
   
!!! danger "Disadvantages of AutoRCM" 
	There are a couple of disadvantages you should consider before installing AutoRCM:

	- Your Switch will not boot normally with AutoRCM installed. This means you will need to keep a device ready to inject a payload every time you power it on (similar to a "tethered jailbreak"). Note: sleep mode is not considered "powering on" the console. Sleep mode will still work as intended
	- When completely discharged, your Switch will take a very long time to charge while in RCM. This means that you'll be waiting around an hour or two for the battery to fully recharge to even boot your console again.

!!! tip "Advantages of AutoRCM"
	AutoRCM can be used for good as well:

	- If you were having trouble getting into RCM before, because for example you're using the tinfoil method, now you can get into RCM every time
	- If you want to keep fuses unburned, you can do so with AutoRCM, as the Switch never gets the change to burn them after updating when using AutoRCM
	- Easier to inject a payload using a payload injector

If, despite all of the warnings above, you still want to install AutoRCM, and understand the risks, do the following:

1. Boot Hekate
2. Go to `Tools`
3. At the bottom of the page, tap `Archive bit - AutoRCM`
4. Then tap `AutoRCM`. It will show a little `ON` next to the option once you have done this
