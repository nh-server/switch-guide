# Partitioning the SD Card 

!!!warning "This will delete everything on your sd card"
	Doing this will delete all your data from your sd card, be warned!

!!! warning "Back up your existing Nintendo folder"
	Before we start, if you are using a microSD card already as a storage device for your games, you will want to back up your `Nintendo` folder that is on the root of your microSD card to a safe place on your computer. This folder contains your downloaded games and game updates. After creating the emuMMC, you will need two copies of your Nintendo folder: one for your sysMMC and one for your emuMMC.

-----

## Preparations

What you need:

- The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of hekate)
### Instructions

1. Inject the Hekate payload with your 64GB (or larger) SD card inserted into your Switch.
	- If you forgot how to do this, re-read the [sending payload](sending_payload.md) section of the guide.
2. Use the touchscreen to navigate to `Tools` at the top.
3. Tap on the `Paritition SD Card` button.
4. Read the warning and select `Don't Backup` to proceed to the next screen.
	- Note: This will delete all data on your SD card. Make sure you backed up your Nintendo folder!
5. Slide the red `emuMMC (RAW)` slider to the right until it gets to `29 FULL`.
6. Tap on the `Next Step` button.
7. Read the warning and tap on the `Start` button.
9. Press the Switch's power button to continue.
	- This should not take more than a few seconds.
10. Tap on `Close` on the top-right of the screen.
11. Tap on `Home` on the top of the screen.
12. Tap on the `Reboot` button on the bottom-right of the screen and then tap the `RCM` button to reboot to RCM. It's now safe to eject your microSD card for the next part of the guide.

!!! warning "Windows complaining about an unreadable drive"
    If you get the issue that Windows says the SD card is unreadable and wants to format it, do not format! This is likely your emuMMC partition. After partitioning your sd, your sd will show up as 2 drives on your pc. Use the drive that can be accessed
    
&nbsp;

#### [Continue to SD Preparations <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)
