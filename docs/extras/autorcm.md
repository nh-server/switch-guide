## AutoRCM

!!! tip "What is autoRCM"
	AutoRCM is a controlled brick, bricking a part of the boot0/1 to make the console believe it's bricked and boot straight to RCM (recovery mode). This means that if you're not careful around autoRCM, you can end up **damaging** your console. Please take care when using autoRCM.

	Note: Before you freak out if the switch's screen stays black when you power on your switch after activating autoRCM, it's not bricked. it's in RCM.

!!! warning "If you don't have a boot0/1 backup yet..."
	You really want to kill your console huh? If you haven't made a boot0/1 backup yet, it is recommend to make one **right now**.

	1. Boot Hekate.
	2. Go to `Tools > Backup`, and select `Backup eMMC BOOT0/1`.

!!! danger "Disadvantages of autoRCM" 
	There are a couple of disadvantages you should consider before installing autoRCM:

	- Your Switch will not boot normally with AutoRCM installed. This means you will need to keep a device ready to inject a payload every time you power it on (similar to a "tethered jailbreak"). Note: Sleep mode is not considered "powering on" the console. Sleep mode will still work as intended.
	- When completely discharged, your switch will take a very long time to charge while in RCM. This means you'll be waiting around an hour or two for the battery to fully recharge to even boot your console again

!!! tip "Advantages of autoRCM"
	AutoRCM can be used for good as well:

	- If you were having trouble getting into RCM before, because for example you're using the tinfoil method, now you can get into RCM every time
	- If you want to keep fuses unburned, you can do so with autoRCM, as the switch never gets the change to burn them after updating when using autoRCM
	- Easier to inject a payload using a payload injector

If, despite all of the warnings above, you still want to install autorcm, and understand the risks, do the following:

1. Boot Hekate.
2. Go to `Tools > AutoRCM`.
3. Enable AutoRCM.